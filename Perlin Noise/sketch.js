var t = 0;
function setup(){
  createCanvas(600,400);
  frameRate(20);
}
function draw(){
  background(0);
  fill(255);
  var x = noise(t);
  x = map(x,0,1,0,width);
  //var x = random(width);
  ellipse(x,height/2,44,44);
  t = t + 1;
}