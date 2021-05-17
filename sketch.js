var hr, mn , sec;
function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 15, 15);
}

function draw() {
  background(0);  

  hr=hour();
  mn=minute();
  sec=second();
  
 
  angleMode(DEGREES);
  translate(400, 350);
  rotate(-90);

  secAngle= map( sec, 0, 60, 0, 360);
  mnAngle = map( mn, 0, 60, 0, 360);
  hrAngle = map( hr%12, 0, 12, 0, 360);

  stroke( 255, 0, 0);
  strokeWeight(7);

  push();
  rotate(secAngle);
  line(00, 00, 200, 00);
  pop();

  push();
  rotate(mnAngle);
  stroke('green');
  line(00, 00, 200, 00);
  pop();

  push();
  rotate(hrAngle);
  stroke('blue');
  line(00, 00, 100, 00);
  pop();

  strokeWeight('10');
  noFill();
  stroke('blue');
  arc( 0, 0, 410, 410, 0, hrAngle);

  stroke('green');
  arc( 0, 0, 440, 440, 0, mnAngle);

  stroke('red');
  arc( 0, 0, 470, 470, 0, secAngle);


  console.log(hour());
  drawSprites();
}