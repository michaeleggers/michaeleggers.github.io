let angle=0;

function setup() {
  createCanvas(500 ,500);
  rectMode(CENTER);
}

function draw() {
  background(220);
  translate(width/2, height/2);
  let numberOfSquares = 50;
  for(let i=0; i< numberOfSquares; i++) {
    rotate(angle);
    let size = 300 - i *5;
    fill(255,100 - i*20,10+ i*15)
    rect(0,0,size,size);
  }
  angle += 0.001;
}

function myFunction(){

}