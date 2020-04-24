class Mover{
  constructor(x, y, mass, alpha){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();    
    this.acc = createVector(0,0);    
    this.mass = mass;
    this.radius = sqrt(this.mass) * 10;
    this.alpha = alpha;
    this.history = [];
  }
  
  
  applyForce(force){
    let f = force.div(this.mass);    
    this.acc.add(f);
  }
   
 
    
  update(){     
    if(frameCount % 5 == 0){
      this.history.push(this.pos.copy());
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
    if(this.history.length > 250){
      this.history.splice(0,1);
    }
  }
  
  show(){
    stroke(255);
    strokeWeight(2);    
    fill(255,this.alpha);
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