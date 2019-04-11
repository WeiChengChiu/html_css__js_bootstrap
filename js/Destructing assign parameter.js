function distance({ x = 0, y = 0 }) {
  return Math.sqrt(x * x + y * y);
}

function distance(point) {
  const { x, y } = point;
  return Math.sqrt(x * x + y * y);
}
