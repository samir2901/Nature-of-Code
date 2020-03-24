function setup() {
  createCanvas(400, 400);
  background(255);  
}

function draw() {
  translate(width / 2, height / 2);
  
  let v = p5.Vector.random2D();
  v.mult(random(100));
  strokeWeight(4);
  stroke(25,50,254,50);
  line(0, 0, v.x, v.y);
}