function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  let pos = createVector(200,200);
  let mouse = createVector(mouseX, mouseY);
  
  let v = p5.Vector.sub(mouse,pos);
  translate(width / 2, height / 2);
  strokeWeight(4);
  stroke(255,50);
  line(0, 0, v.x, v.y);
}