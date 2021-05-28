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
// students 배열 안에 있는 배열들을 분리해서 각각 이름에 맞는 let{}안의 변수에 할당한다.(변수명이 같으면 생략 가능  ex. normal: normal = normal)
// 이때 그 이름 뒤에 :바꿀이름 을 적어주면 변수명을 바꿀수도 있다. ex) smart(students배열에 원래 있던 변수명): brillient(내가 바꿀 변수명)
console.log(brillient)
console.log(gohard)
console.log(poor)