class Mover{
  constructor(x, y, mass){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);    
    this.mass = mass;
    this.radius = sqrt(this.mass) * 10;
  }
  
  newtonianForce(force){
    if(this.mass != 0){
      force.div(this.mass);
    }
    this.acc.add(force);
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