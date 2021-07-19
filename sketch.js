var hr;
var mn;
var sc;

function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(0,0,0);  

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  translate(400,200);
  rotate(-90);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,70,0);
  pop();
 
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,40,0);
  pop();

  drawSprites();
}