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

