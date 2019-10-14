//
// 屬性縮寫
function makePoint(x, y) {
    return {
        x: x,
        y: y
    };
}

function makePoint(x, y) {
    return {
        x,
        y
    };
}


//
// 計算屬性
function creatObj(key, value){
    const obj = {};
    obj[key] = value;

    return obj;
} 
const person = createObj('name', 'John'); // {'name': 'John'}
const cat = createObj('legs', '4'); // {'legs', '4'}

function creatObj(key, value){
    const obj = {
        [key] : value
    };
    return obj;
}

function creatObj(key, value){
    const obj = {
        [key+1] : value
    };
    return obj;
}
const person = createObj('name', 'John'); // {'name1': 'John'}


// 函式縮寫
const options = {
    name: 'Options',
    level: 10,
    created: function(){

    },
    mounted(){
        console.log('hi');
    },
};