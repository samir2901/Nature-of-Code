class Attractor{  
  constructor(x,y,mass, radius){
    this.pos = createVector(x,y);
    this.mass = mass;
    this.radius = radius;
  }
  
  attract(mover){
    let r = p5.Vector.sub(this.pos, mover.pos);
    let dist2 = constrain(r.magSq(),10,10000);     
    let G = 2;    
    if(mover.mass < 0){
      G *= -1;
    }
    let fMag = (this.mass * mover.mass * G)/dist2;    
    let gForce = r.copy();
    gForce.normalize();
    gForce.setMag(fMag);
    mover.applyForce(gForce);    
  }
    
  
  show(){
    noStroke();
    fill(random(235,255), random(195,255), random(52,255));
    ellipse(this.pos.x, this.pos.y, this.radius * 4);
  }
}