
let lineY=250;
let speed=0.3;
var r;
var g;
var b;
var a;
var n;
var m;

function setup() {
  createCanvas(700, 500);
  rectMode(CORNER);
  frameRate(60);
  n = color(255,0,0);
  m = color(0,0,255);
}

function draw() {
  background(0, 0, 0);
  // console.log(deltaTime)
  r = random(255); // r is a random number between 0 - 255
  g = random(255); // g is a random number betwen 100 - 200
  b = random(255); // b is a random number between 0 - 100
  a = random(200,255); // a is a random number between 200 - 255

  var t = map(mouseX,0,width,0,1.0);
  var c = lerpColor(n,m,t);

  strokeWeight(0); //Horizont Rechteck
  fill(41,0,33)
  rect(0, 0, 700, 250);


  fill(c)
  circle(350, 80, 250);

  fill(0) //Berg links
  triangle(125, 250, 275, 250, 200, 150);

  fill(0) //Berg Mitte
  triangle(225, 250, 475, 250, 350, 100);

  fill(0) // Berg rechts
  triangle(575, 250, 425, 250, 500, 125);

  strokeWeight(5);
  stroke(r,g,b);
  line(125,250, 200, 150);

  strokeWeight(5);
  stroke(r,g,b);
  line(425,250, 500, 125);

  strokeWeight(5);
  stroke(r,g,b);
  line(225,250, 350, 100);


  strokeWeight(3);  // Linie am Horizont
  stroke(0,204,204);
  line(700,250, 0, 250);

  strokeWeight(3); //mitte‚
  stroke(0,204,204);
  line(350,250, 350, 700);

  strokeWeight(3); //linksmitte
  stroke(0,204,204);
  line(250,250, 50, 700);

  strokeWeight(3); //links
  stroke(0,204,204);
  line(100,250, -100, 700);

  strokeWeight(3); //rechtsmitte
  stroke(0,204,204);
  line(450,250, 650, 700);

  strokeWeight(3); //rechts
  stroke(0,204,204);
  line(600,250, 800, 700);


  for (let i = 0; i <= 7; i++) {
    line(700, lineY + (i * 30), 0, lineY + (i * 30));
    lineY += speed; //equivalent to lineY = lineY + speed;
    if (lineY >= 280 + (i * 30)) {
      lineY = 250;
    }
  }
}
