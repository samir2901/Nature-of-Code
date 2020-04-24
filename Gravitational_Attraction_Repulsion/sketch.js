let movers = [];
let attractor1, attractor2, attractor3, attractor4;

//the green ones are body having negative mass and the red ones have positive mass
//repulsive gravitational force is possible when there is negative mass


function setup() {
  createCanvas(windowWidth, windowHeight)
  for(let i = 0; i < 15; i++){
    let x = random(width/2 - 200, width/2 + 200);
    let y = random(height/2 - 200, height/2 + 200);
    let m = random(-5,5);
    let r = random(5,8)
    let a = random(60,100);
    movers[i] = new Mover(x,y,m,r,a);    
  }   
  attractor1 = new Attractor(width/2 - 200,height/2,28,14);    
  attractor2 = new Attractor(width/2 + 200,height/2,28,14);
  attractor3 = new Attractor(width/2,height/2 - 200,14,7);
  attractor4 = new Attractor(width/2,height/2 + 200,14,7);
  
}

function draw() {
  background(0);
  for(let m of movers){
    //m.edges();
    m.update();
    m.show();
    attractor1.attract(m);    
    attractor2.attract(m);
    attractor3.attract(m);
    attractor4.attract(m);
  }  
  attractor1.show();  
  attractor2.show();  
  attractor3.show();  
  attractor4.show();  
}