var double = function (x) {
  return x * 2;
}

const double = (x) => {
  return x * 2;
}

//shorthand
const double = x => {
  return x * 2;
}// only one parameter can skip ()
const double = x => x * 2; // can skip to this way

// no parameter can't skip
// two parameters can't skip

arr.map(function (ele, idx) {
  return ele + idx;
});
arr.map((ele, idx) => ele + idx);
btn.addEventListener('click', () => console.log(10));


//auto binding
const a = () => {
  console.log(this);
}
console.log(this); // same as above

var b = function () {
  console.log(this);
}
console.log(this); // dependent on condition





const a = () => {
  console.log(this);
  const aa = () => {
    console.log(this); // same as above
  }
}

// this function's context
// 直接執行: window(global)
// 作為物件的成員函式執行: 該物件
// 作為 dom 的偵聽函式執行: 該物件
var name = 'Heisenburg';

var sayName = function () {
  console.log(this.name);
}

var teacher = {
  name: 'white',
}
teacher.sayName = sayName;

sayName(); //'Heisenburg'
teacher.sayName(); //'white'


// <button id="btn" name="got domn right">Response</button>
btn.addEventListener('click', sayName);

//if use arrow function
var sayName = () => {
  console.log(this.name);
}
