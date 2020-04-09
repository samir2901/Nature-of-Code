

let mover = [];
let coefficient = 0.01;
function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 10; i++){
    mover[i] = new Mover(random(width), 1, random(1,8));  
  }
}

function draw() {
  background(0);
  
  fill(255,125);
  noStroke();
  rect(0, height/2, width, height/2);
  
  
  

  for(let i = 0; i < 10; i++){
    if (mouseIsPressed) {
      let wind = createVector(0.1, 0);
      mover[i].applyForce(wind);    
    }    
    
    if(mover[i].pos.y >= height /2){
      coefficient = 0.5;
    }
   
    let gravity = createVector(0, 0.2);
    let weight = p5.Vector.mult(gravity, mover[i].mass);  
    mover[i].applyForce(weight);  
    mover[i].dragForce(coefficient);
    mover[i].update();
    mover[i].edges();
    mover[i].show();
  }
}