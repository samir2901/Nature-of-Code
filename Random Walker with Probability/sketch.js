var w;
function setup() {
  createCanvas(800,600);
  background(255);
  w = new Walker();
}

function draw() {
  w.move();
  w.show()
}