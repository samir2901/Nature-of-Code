let pos;
let prevPos;

function setup() {
  createCanvas(400, 400);
  background(0);
  pos = createVector(200,200);
  prevPos = pos.copy();
}

function draw() {
  if((pos.x < width && pos.x >0) || (pos.y < height && pos.y >0 )){
    stroke(255,0,0);  
    line(pos.x,pos.y,prevPos.x,prevPos.y);
    prevPos.set(pos);
  
    var step = p5.Vector.random2D();
  
  
    var prob = random(1);
  
    if (prob < 0.02){
      step.mult(random(25,100));      
    }else{
      step.setMag(2);
    }   
  
    pos = p5.Vector.add(pos, step);  
  }
  
}