let projectiles = [];
let g;
let step = 0.01;
let pct = 0.0;
function setup() {
  createCanvas(600, 400);
  g = 0.2;
  for(let i = 0; i <= 5; i++){
    let r = 9;
    let vel = random(4,7);
    projectiles.push(new Projectile(vel, r));
  }    
}

function draw() {
  background(0);
  for(let p of projectiles){
    p.update();
    p.edge();
    p.show();
  }
}