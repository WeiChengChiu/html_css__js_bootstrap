// Expression 表達式
// Statement  陳述式
function greet(name, days) {
  const hours = days * 24;
  console.log(`Hello, ${name}! It's been ${hours} hours!`);// backtick`
}

greet('Jack', 3);

function greet(name, days) {
  // console.log('Hello,' + name + '!');
  console.log(`Hello, ${name}! ${(days < 7) ? '' : 'long time no see'}`);// backtick`
}


//mutiple lines
const words = 'dddddddddddd\n' +
  'dddddddddddddddddddddddd\n' +
  'ddddddddd';

const words = `
  dddddddd
  ddddddddddddddddddd
  dddddddddd
`;
