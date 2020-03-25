let w1;
let w2;
let netForce1;
let netForce2;
function setup() {
  createCanvas(400, 400);
  w1 = new Mover(100,200,2);
  w2 = new Mover(200,200,4);
}

function draw() { 
  background(0);
  let gravity = createVector(0,0.2); 
    
  
  let weight1 = p5.Vector.mult(gravity,w1.mass);
  let weight2 = p5.Vector.mult(gravity,w2.mass);
  
  netForce1 = weight1;
  netForce2 = weight2;
  
  w1.newtonianForce(netForce1);
  w1.edges();
  w1.update();
  w1.show();
  
  w2.newtonianForce(netForce2);
  w2.edges();
  w2.update();
  w2.show();
}

