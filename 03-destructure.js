//
//  陣列解構
const nums = [1, 2, 3];

const first = nums[0];
const second = nums[1];

const [first, second] = nums;
const [first, second, third, fourth] = nums; // fourth = undefined

let first;
let second;
[first, second] = nums;

//
// 預設值
const nums = [1, 2];
const [first, second, third = 0] = nums;

//
// 忽略原素
const nums = [1, 2, 3, 4];
const [,, third] = nums;


// 
// 變數交換
let a = 1;
let b = 2;

let tmp = a;
a = b;
b = tmp;
[a, b] = [b, a];


const nums = [1, 2, 3, 4];
const [first, ...others] = nums;




//
//  物件解構
const point = {
    x: 100,
    y: 150,
};

const x = point.x;
const y = point.y;
const {x, y} = point;

// 預設值
const {x, y , z = null} = poinnt;

// 指派新名稱
const {x:px, y} = point; // xy = 100; 



//
// 解構函式參數
function distance(point){
    return Math.sqrt(point.x*point.x + point.y*point.y);
}

function distance(point){
    const {x, y} = point;
    return Math.sqrt(x*x + y*y);
}

function distance({x, y}){
    return Math.sqrt(x*x + y*y);
}