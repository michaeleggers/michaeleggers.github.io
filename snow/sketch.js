let snowflakes = []
let numSnowflakes = 2000

function setup() {
  frameRate(60)
  createCanvas(1920, 1080);
  for (let i=0; i<numSnowflakes; i++) {
    snowflakes.push({x: random(0, width), y: random(0, height), d: random(1,15)})
  }
}  

function draw() {
  background(0, 40, 100);
  for (let i=0; i<numSnowflakes; i++) {
    let snowflake = snowflakes[i]
    snowflake.y += snowflake.d*0.5
    if (snowflake.y > height) {
      snowflake.y = 0
      snowflake.x = random(0, width)
    }
    circle(snowflake.x, snowflake.y, snowflake.d)

  }
}