const WIDTH = 400
const HEIGHT = 400

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

const random = (max) => {
  return Math.floor(Math.random() * max)
}

let x_values = []
let y_values = []

for (let i = 0; i < random(50)+50; i++) {
  x_values.push(random(WIDTH));
  y_values.push(random(HEIGHT));
}

function draw() {
  background(0);
  // circle(width/2, height/2, 18)
  // fill(50, 700, 609);

  x_values.forEach((x, index) => {
    line(width / 2, height / 2, x, y_values[index]); 
  })
  

  stroke('#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
  strokeWeight(2);
}