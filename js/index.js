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


