document.write(1+1)


var avo = 3;
avo >= 1 ?  console.log('buy 6 milk') : console.log('Dont Buy Milk')

// $('.nd-btn').on('click', changeBg)
// function changeBg(){
//   $('body').css({"background-color": "black", "color": "white"})
// }

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


var i = 0;
var $nav = $('.navi')
var $navLen = $('.navi').length
var $snav = $('.sub-navi')
var $snavLen = $('.sub-navi').length

$nav.on('mouseenter', onShowSubNavi)

function onShowSubNavi(){
  var idx = $(this).data('idx')
  $snav.hide()
  $snav.eq(idx).show()
}

// Q1. 10까지의 숫자중에 짝수만 출력
for(var i = 0; i < 11; i++){
  if(i % 2 !== 0) {   // i값을 2로 나누었을때 나머지값(%)이 0과 같은가? -> 같으면(짝수) true, 다르면(홀수) false
    continue;   // false의 경우 무시하고 진행
  }
  console.log(`q1. ${i}`)
}

// Q2. 8까지만 출력
for(var i = 0; i < 11; i++){
  if(i > 8) {
    break;
  }
  console.log(`q2. ${i}`)
}