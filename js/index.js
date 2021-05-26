// document.write(1+1)

// 마트가서 우유사고 아보카도 있으면 여섯개 사와
var avo = true;
avo == true ? console.log('Buy 6 Milks') : console.log('buy milk')


// 나이트 모드
var nd = $('.nd-btn')
 nd.on('click', toggleBt)
 function toggleBt(){
   if(this.value == 'night'){
    $('body').css({"background-color": "black", "color":"white"})
    this.value = 'day'
   }else{
    $('body').css({"background-color": "white", "color":"black"})
    this.value = 'night'
   }
 }


// 각각의 navi 항목 안에 sub-navi가 위치하는 경우 class active를 이용해 show, hide 시킨다.
  $('.navi2').on('mouseenter', onShowSubNavi)
  $('.navi2').on('mouseleave', onHideSubNavi)

   function onShowSubNavi(){
		$('.sub-navi2').removeClass('active');
		$(this).find('.sub-navi2').addClass('active');
  }
   function onHideSubNavi(){
		$('.sub-navi2').removeClass('active');
  }


  // kakao API 지도붙이기
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 


// aside top 버튼 - 스르륵 올라가게 해줌
$('.bt-top').click(movingTop);

function movingTop(e){
  e.preventDefault();		//서버로 전송을 막는다. 주소줄에 #안붙게 해줌
	$('html, body').stop().animate({ "scrollTop": 0 }, 300);
}


// Q1. 10까지의 숫자중에 짝수만 출력
for(var i = 0; i < 11; i++){
  if(i % 2 !== 0) {   // i값을 2로 나누었을때 나머지값(%)이 0과 같은가? -> 같으면(짝수) true, 다르면(홀수) false
    continue;   // false의 경우 무시하고 진행
  }
  console.log(`q1. ${i}`)
}
console.log('====================')

// Q2. 8까지만 출력
for(var i = 0; i < 11; i++){
  if(i > 8) {   // 8보다 큰 수가 나올 차례이면 함수를 빠져나온다
    break;
  }
  console.log(`q2. ${i}`)
}
console.log('====================')

// ES6 - Arrow function
const showResult = (a, b) => {
  console.log(a + b);
}
showResult(3, 5);


// spread operator - arr와 arr2를 조각내서 arr3에 담아준다.
const arr = ['A', 'B', 'c'];
const arr2 = ['D', 'E', 'F'];

const arr3 = [...arr, 'push', ...arr2];  // 중간에 문자열을 추가해줄 수도 있음
console.log(arr3)


// arguments(가변인자)
function sum(){
  let total = 0;
  for(let v of arguments) total += v;
  return total;
}
let numbers = [1, 2, 3, 4, 5, 6];   // numbers라는 배열이 argument에 순서대로 들어가면서 계속 더해진다. < 0+1=1+2=3+3=6+4=10+5=15+6=21 > 

let total2 = sum(...numbers);
console.log(total2);    // 21


// 구조분해 할당
const students = {
  smart: [
    {name: 'a', kor: 70},
    {name: 'b', kor: 80},
    {name: 'c', kor: 60}
  ],
  normal: [
    {name: 'd', kor: 70},
    {name: 'e', kor: 80},
    {name: 'f', kor: 60}
  ],
  idiot: [
    {name: 'g', kor: 70},
    {name: 'h', kor: 80},
    {name: 'i', kor: 60}
  ]
}

let { smart: brillient, normal: gohard, idiot: poor } = students 
// students라는 배열 안에 있는 배열들을 분리해서 각각의 이름에 맞는 let{}안의 변수에 할당한다.(이름이 같아야함)
// 이때 그 이름 뒤에 :바꿀이름 을 적어주면 변수명을 바꿀수도 있다. ex) smart(students배열에 원래 있던 변수명): brillient(내가 바꿀 변수명)
console.log(brillient)
console.log(gohard)
console.log(poor)


