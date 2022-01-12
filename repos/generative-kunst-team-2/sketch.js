let x1 = 100
let y1 = 100
let x2 = 100
let y2 = 100
let x3 = 100
let y3 = 100
let x4 = 100
let y4 = 100
let x5 = 100
let y5 = 100
let x6 = 100
let y6 = 100
let nums = 1
let fr = 10

function setup(){
  createCanvas(400, 400);
  background(55);
}

function draw(){
  frameRate(fr);
  
  for (let i = 0; i < nums; i++){
    stroke(255, 204, 0);
    line(x1, y1, x2, y2);
    x1 = x2;
    y1 = y2;
    x2 += random (-20, 20);
    y2 += random (-20, 20);    
   }
  
  for (let i = 0; i < nums; i++){
  stroke(255, 102, 0);
  line(x3, y3, x4, y4);
  x3 = x4;
  y3 = y4;
  x4 += random (-20, 20);
  y4 += random (-20, 20);
  }
  
  for (let i = 0; i < nums; i++){
   stroke(255, 255, 255);
   line(x5, y5, x6, y6);
   x5 = x6;
   y5 = y6;
   x6 += random (-20, 20);
   y6 += random (-20, 20);
   }
}
