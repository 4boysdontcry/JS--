/* 
클라이언트 (browser)에서 보낸 데이터를 받는 3가지 방법

- GET:
1. http://127.0.0.1:3000/gbook/save?content=ABCD
  => app.get('/gbook/save, (req, res, next) => {    get방식으로 받아옴
    let content = req.query.content     // gbook/save?content=ABCD 물음표 뒤의 content를 받아오기 때문에 req.query로 받는다.
  })

2. http://127.0.0.1:3000/gbook/save/ABCD    // query를 붙이지 않는 경우
  => app.get('/gbook/save/:content, (req, res, next) => {   // /gbook/save/:content로 순서를 지정해줌
    let content = req.params.content    // 쿼리 없이 지정된 형식으로 받기 때문에 params(인자)로 받는다
  })

- POST:
  1. <form method="POST" action="/gbook/save">
  => app.get('/gbook/save/, (req, res, next) => {s
    let content = req.body.content
  })

- use:
  app.use(express.json());    // 모든 요청을 json으로 바꿔줌
  app.use(express.urlencoded({ extended: false }));   // url(요청)을 해석하여 req.body에 넣어줌 (req.body에 받으려면 post방식으로 보내야함)
*/


/* ******************** 내가 다운받은 npm module 불러오기 ******************** */
// node - express
const express = require('express');   // 설치한 파일은 경로를 써줄 필요없이 파일명만 쓰면 스스로 index나 main에 명시된 파일을 찾는다.
const app = express();    // express를 app 이라는 변수에 담음
const path = require('path');   // node 자체가 가지고 있는 method
const moment = require('moment');   // 날짜 정보를 가져오는 npm


/* ******************** server-init ******************** */
app.listen(3000, () => { console.log('http://127.0.0.1:3000') })
// 3000번 포트의 요청사항을 듣겠다. 요청사항을 가져온것을 알아보기 쉽게 하기위해 콘솔에 찍어줌
require('./modules/server-init')(app, 3000);    // server-init 파일의 함수를 불러오자마자 인자(app, 3000)을 전달하고 바로 실행하여 서버를 돌린다.

// /modules/server-init
module.exports = (app, port) => {
  app.listen(port, () => {
    console.log( `http://127.0.0.1:${port}` );
  })
}


/* ******************** ejs init ******************** */
app.set('View engine', 'ejs');    // ejs를 view engine으로 사용하겠다.
app.set('views', path.join(__dirname, './views'))   // __dirname: 현재 실행중인 폴더의 경로에서 출발, ./views(동일선상의 views 폴더)에 있는 ejs 파일을 쓰겠다.


/* ******************** req.body init ******************** */
// ① req.body에 접근하기 위해서는 post 방식으로 데이터를 보내고 받아야함.
// ② app.use()는 GET / POST 모두를 받아주는 메서드
app.use(express.json())   // 모든 요청을 json 형태로 바꿔준다.
app.use(express.urlencoded({ extended: false }));
// JSON 형식의 바디를 보내면 서버 측에서 req.body 혹은 req.body.name, req.body.job 등으로 해당 데이터에 곧바로 접근할 수 있게 만들어준다.


/* ******************** Global variables ******************** */
// 내가 만들 모든 ejs 파일에서 사용할 데이터(변수)들
const event = [
  {id: 1, title: '좋은 이벤트1', src: 'evt01.jpg', price: '20,000원'},
  {id: 2, title: '좋은 이벤트2', src: 'evt02.jpg', price: '25,000원'},
  {id: 3, title: '좋은 이벤트3', src: 'evt03.jpg', price: '50,000원'},
  {id: 4, title: '좋은 이벤트4', src: 'evt04.jpg', price: '19,000원'},
  {id: 5, title: '좋은 이벤트5', src: 'evt05.jpg', price: '35,000원'},
  {id: 6, title: '좋은 이벤트6', src: 'evt06.jpg', price: '40,000원'},
  {id: 7, title: '좋은 이벤트7', src: 'evt07.jpg', price: '29,000원'},
  {id: 8, title: '좋은 이벤트8', src: 'evt08.jpg', price: '39,000원'},
  {id: 9, title: '좋은 이벤트9', src: 'evt09.jpg', price: '79,000원'},
];

const gbook = [
  {id: 2, content: '좋아요 좋아요~', createdAt: '2021-05-28 13:25:19'},
  {id: 1, content: '좋아요~', createdAt: '2021-05-28 13:25:17'},
];


/* ******************** Static Router ******************** */
app.use('/', express.static(path.join(__dirname, './public')) );
// static(정적인)화면을 만들어줄 파일들의 경로를 작성해 줌


/* ******************** Dynamic Router ******************** */
app.get( '/event', (req, res, next) => {
  res.render('event.ejs', { event, pagetitle:'이벤트 사이트' })
});
//  주소줄/event 라는 경로에 접근하는 경우 해당 페이지의 pagetitle을 '이벤트 사이트'로 바꿔준다.

app.post('/gbook/save', (req, res, next) => {
  let {content} = req.body;   // form에서 post방식으로 보내서 body로 받음
  let createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
  let id = gbook[0].id + 1;
  gbook.unshift({ id, content, createdAt });
  res.redirect('/gbook');
});

app.get('/', (req, res, next) => {
  res.send( '<h1>Hello Root!</h1>' )  // res(response)는 브라우저의 req(request: 요청)에 대한 응답으로 보내주는 값을 작성한 것
})

// http://127.0.0.1:3000/login?name=4boysdontcry 으로 요청된 것에 대해
app.get('/login', (req, res, next) => {
  let loginUser = req.query.name;   // 브라우저의 요청중 query는 주소줄의 ? 뒤에 오는 요청사항들을 뜻한다. 여기서는 요청 주소줄에 name이 명시되어 들어왔다.
  res.send( `<h1>Hello ${loginUser}!</h1>` );  // ${}은 ES5의 '+v.something+' 과 같다.
})

// http://127.0.0.1:3000/sign/4boysdontcry 으로 요청된 것에 대해
app.get('/sign/:name', (req, res, next) => {    // 여기서는 받을 루트에 name을 지정했기 때문에 밑의 req.params.name으로 받는것이 가능하다.
  let loginUser = req.params.name;
  res.send( `<h1>Hello ${loginUser}!</h1>` )
})

// http://127.0.0.1:3000/data/2.5/weather?appid=abcd&units=metric&lat=37.25&lon=127.35 로 요청된 것에 대해
app.get('/data/2.5/weather', (req, res, next) => {
  // let appid = req.query.appid
  // let units = req.query.units
  // let lan = req.query.lan
  // let lon = req.query.lon    //  ↙ 이것을 구조분해 할당으로 받아오면
  let { appid, units, lat, lon } = req.query;
  console.log('날씨정보 가져오는 로직');
  res.json({    // json 형태로 보내줌
    city: 'seoul',
    lat,    // lat: lat을 줄여서 작성한 것
    lon,    // lon: lon을 줄여서 작성한 것
    dt: new Date.getTime(),   // 생성자 함수 Date를 통해 시간을 가져옴
    main: {
      temp: 18.95,
      feels_like: 17.3
    },
    weather: {
      main: 'rain',
      description: 'scatter rain'
    }
  })
});


