class Attractor{
  constructor(x,y,mass){
    this.pos = createVector(x,y);
    this.mass = mass;
    this.radius = sqrt(this.mass) * 10;
  }
  
  attract(mover){
    let r = p5.Vector.sub(this.pos, mover.pos);
    let dist2 = constrain(r.magSq(),50,2500);    
    let G = 6;    
    let fMag = (this.mass * mover.mass * G)/dist2;
    let gForce = r.copy();
    gForce.normalize();
    gForce.setMag(fMag);
    mover.applyForce(gForce);    
  }
    
  
  show(){
    noStroke();
    fill(157, 3, 252);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }
}