class Mover{
  constructor(x, y, mass, radius, alpha){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();    
    this.acc = createVector(0,0);    
    this.mass = mass;
    this.radius = radius;
    this.alpha = alpha;
    this.history = [];
  }
  
  
  applyForce(force){
    let f = force.div(this.mass);    
    this.acc.add(f);
  }
   
  edges(){
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.mult(-1);
    }
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.mult(-1);
    }  
  }
 
    
  update(){     
    if(frameCount % 5 == 0){
      this.history.push(this.pos.copy());
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
    if(this.history.length > 50){
      this.history.splice(0,1);
    }
  }
  
  show(){    
    strokeWeight(2);  
    if(this.mass > 0){
      stroke(255,0,0);
      fill(255,0,0,this.alpha);
    }else{
      stroke(0,255,0);
      fill(0,255,0,this.alpha);
    }
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
    
    strokeWeight(2); 
    noFill();
    beginShape();
    for(let v of this.history){
      vertex(v.x,v.y);
    }
    endShape();
  }
}