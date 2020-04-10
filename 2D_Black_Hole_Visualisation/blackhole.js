class Blackhole{
  constructor(x, y, m){
    this.mass = m;
    this.pos = createVector(x,y);
    this.er = (2 * G * this.mass) / (c * c); //calculating event horizon
  }
  
  pull(photon){
    const fV = p5.Vector.sub(this.pos,photon.pos);    
    const r = fV.mag();    
    const force = (G * this.mass)/(r*r);
    fV.setMag(force);
    photon.vel.add(fV);
    photon.vel.setMag(c);  
    
    if(r < this.er + 0.5){
      photon.stop();
    }
  }
  
  
  show(){
    //draw the dark part of blackhole
    fill(0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.er);
    
    //draw the accretion disk
    noFill();
    strokeWeight(15);
    stroke(255, 157, 0, 100);    
    ellipse(this.pos.x, this.pos.y, this.er*3+7.5);
    
    
    //unstable photon orbit
    stroke(255, 50, 0, 100);
    strokeWeight(7.5);
    ellipse(this.pos.x, this.pos.y, this.er*1.5+3.25);
  }  
}