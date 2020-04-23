class Projectile{
  constructor(initialVel, radius){
    this.vel = initialVel;    
    this.pos = createVector(radius,radius);    
    this.radius = radius;    
  }
  
  update(){
    pct += step;
    this.pos.x = this.pos.x + this.vel;
    this.pos.y = this.pos.y + this.vel * g * pow(pct,2);       
  }
  
  edge(){
    if(this.pos.x > width){
      this.vel *= -1;
    }
    if(this.pos.y > height-this.radius-3){
      this.vel = 0;
    }else if(this.pos.y < 0){
      this.vel *= -1;
    }
  }
  
  
  show(){
    fill(255,0,0);
    circle(this.pos.x,this.pos.y,this.radius*2);     
  }
}