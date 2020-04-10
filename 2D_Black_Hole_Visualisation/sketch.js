const c = 30; //speed of light
const G = 4; //Universal gravitational constant

let start, end;

let blackhole;
let photons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);
  blackhole = new Blackhole(width/2-240,height/2,3500);
  
  start = height/2;
  end = height/2 - blackhole.rs * 2.6;
  for(let y = 0; y < start; y+=10){
    photons.push(new Photon(width-20,y));
  }  
}

function draw() {
  background(220);
  blackhole.show();
  
  for(let photon of photons){    
    blackhole.pull(photon);
    photon.show();
    photon.update();
  }
}