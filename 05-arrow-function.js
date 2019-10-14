//
// 箭頭函式
var double = function(x) {
    return x * 2;
}

var double = (x) => {
    return x * 2;
}

var double = x => {
    return x * 2; // 參數只有一個可省略, 無或多個不行省略
}
var double = x => x * 2; // 參數只有一行可接到 => 後面, 不能加return


arr.map(function(elm, idx){
    return elm + idx;
});
arr.map((elm, idx) => elm + idx);

btn.addEventListener('click', function(){});
btn.addEventListener('click', () => console.log(10));



// 自動綁定
const a = () => {
    console.log(this);
    const aa = () => {
        console.log(this);
    }
}

var b = function() {
    console.log(this);
}

console.log(this); // window
a() //window
b() //window
////////   this all same

var name = 'Heissenburg';
var sayMyName = () => {
    console.log(this.name);
}

var teacher = {
    name: 'White',
}
teacher.sayMyName = sayMyName;

sayMyName(); // Heissenburg
teacher.sayMyName(); // Heissenburg

// <button id="btn" name="Damn">Response</button>
btn.addEventListener('click', sayName); // Heissenburg



// this
var name = 'Heissenburg';
var sayMyName = function(){
    console.log(this.name);
}

var teacher = {
    name: 'White',
}
teacher.sayMyName = sayMyName;

sayMyName(); // Heissenburg
teacher.sayMyName(); // White

// <button id="btn" name="Damn">Response</button>
btn.addEventListener('click', sayName); // damn