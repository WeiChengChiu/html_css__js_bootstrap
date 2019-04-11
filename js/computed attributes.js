function createObj(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
}

function createObj(key, value) {
  return {
    [key]: value,
  };
}


function createObj(key, value) {
  return {
    key: value,
  };
}
createObj('name', 'jack');
// {
//   name: 'jakc';
// }
