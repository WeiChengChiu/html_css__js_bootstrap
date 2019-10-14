var

let
const

//
// for
for(var i = 0; i < 3; i++){
}
console.log(i); //3

for(let i = 0; i < 3; i++){
}
console.log(i); //Uncaught ReferenceError: i is not defined

for(const i = 0; i < 3; i++){
}
console.log(i); //Uncaught TypeError: Assignment to constant variable

//
// work, but don't use it
for(let i = 0; i < 3; i++){
    let i = 10;
    console.log(i); // print 10 3times
}

//
// 提升(hosting)
a();
function a() {
}

a += 1;
var a; // NaN

// Error
a += 1;
let a; // Cannot access 'a' before initialization


let a = 1;
a = 2;

// Error
const b = 1;
b = 2; //Assignment to constant variable.

const c = {x: 1};
c.x = 3;

let c = {x: 1};
c.x = 3;
