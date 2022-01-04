var x = [];
var y = [];
var num = 30;
var length = 5;

function setup() {
  var canvas = createCanvas(windowWidth, $(document).height());
  canvas.parent("canvas");
  for (let i = 0; i < num; i++) {
    x[i] = 0;
    y[i] = 0;
  }
}

function draw() {
  background(255);
  drag(0, mouseX, mouseY);
  for (let i = 0; i < x.length - 1; i++) {
    drag(i + 1, x[i], y[i]);
  }
}

function drag(i, xin, yin) {
  const dx = xin - x[i];
  const dy = yin - y[i];
  const angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * length;
  y[i] = yin - sin(angle) * length;
  push();
  translate(x[i], y[i]);
  rotate(angle);
  strokeWeight(7);
  if (i == 0 || i == num - 1)
    strokeCap(SQUARE);
  stroke(0);
  line(0, 0, length, 0);
  pop();
}