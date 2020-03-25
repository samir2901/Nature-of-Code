let w;
let netForce;
function setup() {
  createCanvas(400, 400);
  w = new Mover(200,200);
  
}

function draw() { 
  background(0);
  let gravity = createVector(0,0.2);   
  netForce = gravity;
  if(mouseIsPressed){
    let windForce = createVector(1,0);
    netForce = p5.Vector.add(gravity,windForce);
  }  
  w.newtonianForce(netForce);
  w.edges();
  w.update();
  w.show();
}