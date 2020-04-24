let movers = [];
let attractor;

function setup() {
  createCanvas(windowWidth, windowHeight)
  for(let i = 0; i < 5; i++){
    let x = random(0,width);
    let y = random(0,height);
    let m = random(1,3);
    let a = random(60,100);
    movers[i] = new Mover(x,y,m,a);
  }   
  attractor = new Attractor(width/2,height/2,7);    
  
}

function draw() {
  background(0);
  for(let m of movers){
    m.update();
    m.show();
    attractor.attract(m);    
  }  
  attractor.show();  
}