const rects = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<100; i++) {
    rects.push({ x: random(0, width), y: random(0, height), w: 50, h: 50})
  }
}


function draw() {
  background(220);
  rects.forEach((r) => {
    rect(r.x, r.y, r.w, r.h)
  })
}