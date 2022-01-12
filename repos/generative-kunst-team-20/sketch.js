function setup() {
  createCanvas(canvasSize, canvasSize+60);
  noStroke();
}

function draw() {
  background(255);
  push();
    translate(randomTranslateX, randomTranslateY);
    drawPoly(randomX, randomY, randomRadius, randomNpoints, randomAmount, randomSpeed, randomBrightness);
    // order: x, y, radius, npoints, amount, speed, brightness
    // x: how much does the polygon differ from origin
    // y: how much does the polygon differ from origin
    // radius: how big is the polygon
    // npoints: how many angles does the polygon have
    // amount: how many polygons get rendered
    // speed: how fast is the polygon rotating
    // brightness: how bright is the color of the polygon
  pop();
  // bottom bar
  translate(0,canvasSize);
  rect(0,0, canvasSize, canvasSize + 60);
  // adds a rectangle to the bottom of the screen (always 60 pixels high regardless of canvasSize)
  push();
    translate(0,0);
    fill(0)
      .textSize(25);
    textFont('Roboto');
    textAlign(CENTER);
    text('LEFT-CLICK TO CHANGE TUNNEL', canvasSize / 2 , 38)
    // adds text into the white rectangle (Font: Roboto, size: 25, alignment: center)
  pop();
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
// creates polygons with x, y, radius and npoints as attributes | code from: https://p5js.org/examples/form-regular-polygon.html

let canvasSize = 1200;
let randomTranslateX;
let randomTranslateY;
let randomX;
let randomY;
let randomRadius;
let randomNpoints;
let randomAmount;
let randomSpeed;
let randomBrightness;
let randomR;
let randomB;
let randomG;
let randomTurn;
randomizeAll();


//randomizes all aspects of the generated Tunnel and saves them in each variable
function randomizeAll(){
  randomTranslateX = (canvasSize / 2) - (canvasSize / 24) + (Math.random() * (canvasSize / 12));
  randomTranslateY = (canvasSize / 2) - (canvasSize / 24) + (Math.random() * (canvasSize / 12));
  randomX = Math.random() * (canvasSize / 60);
  randomY = Math.random() * (canvasSize / 60);
  randomRadius = canvasSize;
  randomNpoints = 6 + (Math.random() * 25);
  randomAmount = 15 + (Math.random() * 35);
  randomSpeed = 80 + (Math.random() * 120);
  randomBrightness = 50 + (Math.random() * 40);
  randomR = 2 + (Math.random() * 3);
  randomB = 2 + (Math.random() * 3);
  randomG = 2 + (Math.random() * 3);
  randomTurn = 14 + (Math.random() * 2);
}

//when the mouse is clicked the tunnel gets 're-randomized'
function mouseClicked(){
  randomizeAll();
}

function drawPoly(x, y, radius, npoints, amount, speed, brightness) {
  /* 'amount' is the variable that terminates the recursion once it reaches 
  a certain value (here, 1). If a terminating condition is not 
  specified, a recursive function keeps calling itself again and again
  until it runs out of stack space - not a favourable outcome! */
  // sets how much each new circle differs from the last
  let turn = randomTurn;
  // fill changes the color and brightness of the polygon
  fill(randomR * brightness, randomB * brightness, randomG * brightness);
  // sets rotation speed of each polygon
  rotate(frameCount / speed);
  // creates new polygon
  polygon(x, y, radius, npoints);
  if (amount > 1) {  
    // 'amount' decreases by 1 at every step and thus makes the terminating condition
    // attainable
    amount = amount - 1;
    // 'turn' decreases by 1 at every step
    turn = turn - 1;
    // draws new polygon with changed attributes
    drawPoly(x * (turn*0.06), y * (turn*0.06), radius/1.25, npoints, amount, speed/(turn*0.07), brightness*0.88);
  }
}
// based on recursion example from here: https://p5js.org/examples/structure-recursion.html
