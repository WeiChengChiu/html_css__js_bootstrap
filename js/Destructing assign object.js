//# destruct object
//- default value
//- assign new name

const point = {
  x: 100,
  y: 150,
};

// const x = point.x;
// const y = point.y;
const { x, y } = point;

//default value
const { x, y, z = null } = point;

//- assign new name
const { x: px, y: py } = point;
