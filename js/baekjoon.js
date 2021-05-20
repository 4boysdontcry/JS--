// 1. Hello World!를 출력하시오.
window.document.write('hello world')

window.document.write('<br><br>')
// 2. 두 줄에 걸쳐 "강한친구 대한육군"을 한 줄에 한 번씩 출력한다.
window.document.write('강한친구\n대한육군 <br> 강한친구\n대한육군' )

window.document.write('<br><br>')
// 3. 아래 예제와 같이 고양이를 출력하시오.
window.document.write("/\    /\ <br> ( ')  ( ')<br>(  /  )<br>\(__)|")

window.document.write('<br><br>')
// 4. 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
window.document.write('a=2, b=3일 때, a+b는?')
function sum(a, b){
  var c = a + b;
  window.document.write('<br>답:'+c);
}
sum(2, 3);

window.document.write('<br><br>')
// 5. 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
window.document.write('a=2, b=3일 때, a-b는?')
function sum2(a, b){
  var c = a - b;
  window.document.write('<br>답:'+c);
}
sum2(2, 3);

window.document.write('<br><br>')
// 6. 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
function sum3(a, b){
  var c = a + b;
  var d = a - b;
  var e = a * b;
  var f = a / b;
  var g = a % b;
  window.document.write('<br>답:'+c);
  window.document.write('<br>답:'+d);
  window.document.write('<br>답:'+e);
  window.document.write('<br>답:'+f);
  window.document.write('<br>답:'+g);
}
sum3(5, 3);