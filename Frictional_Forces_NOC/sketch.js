let mover = [];
let mu = 0.3;

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 10; i++){
    mover[i] = new Mover(random(width), 200, random(1,8));  
  }
}

function draw() {
  background(0);

  for(let i = 0; i < 10; i++){
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover[i].applyForce(wind);    
  }
  
  let gravity = createVector(0, 0.2);
  let weight = p5.Vector.mult(gravity, mover[i].mass);  
  mover[i].applyForce(weight);  
  mover[i].friction(mu);
  mover[i].update();
  mover[i].edges();
  mover[i].show();
  }
}