class Mover{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);
    this.radius = 16;
  }
  
  newtonianForce(force){
    this.acc = force;
  }
  
  edges(){
    if(this.pos.y > height - this.radius){
      this.pos.y = height - this.radius;
      this.vel.y *= -1;
    }  
    
    if(this.pos.x >= width - this.radius){
      this.pos.x = width - this.radius;
      this.vel.x *= -1;
    }else if (this.pos.x <= 0){
      this.pos.x = 0;
      this.vel.x *= -1;
    }
  }
  
  
    
  update(){     
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }
  
  show(){
    stroke(255,100);
    strokeWeight(2);
    fill(255,20);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }
}