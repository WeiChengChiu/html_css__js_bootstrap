//# array
//- default value
//- ignore element
//- variable exchange
//- rest pattern

const nums = [1, 2];
// const first = nums[0];
// const second = nums[1];
const [first, second] = nums;

// default value
const [first, second, third = 0] = nums;


//ignore element
const nums = [1, 2, 3];
const [, second] = nums;
const [, , third] = nums;


//variable exchange
let a = 1;
let b = 2;
// let tmp = a; a = b; b = tmp;
const [a, b] = [b, a];


//rest pattern
const nums = [1, 2, 3, 4];
const [first, ...others] = nums;
first === 1;
// others [2, 3, 4];
