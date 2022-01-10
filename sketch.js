class Particle {
  constructor(x, y, d, ttl) {
    this.x = x
    this.y = y
    this.d = d
    this.ttl = ttl
    this.shouldDraw = true
  }

  update() {
    if (this.ttl <= 0.0) {
      this.shouldDraw = false
    }
  }

  draw() {
    if (this.shouldDraw) {
      fill(200, 200, 200, 100)
      circle(this.x, this.y, this.d)
    }
  }
}

const NUM_PARTICLES = 100
let particles = []

function setup() {
  frameRate(30)
  cv = createCanvas(windowWidth, windowHeight);
  cv.position(0, 0)
  cv.style('z-index', '1')
  for (let i=0; i<NUM_PARTICLES; i++) {
    particles.push(new Particle(
      random(1, 100), random(1, 100), random(1, 20), 1))
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function updateParticles() {
  particles.forEach(p => {
    p.ttl -= 1
    p.y += 10
  })
}


function draw() {
  background(255, 255, 255, 255)
  updateParticles()
  particles.forEach(p => p.draw())
  circle(200, 200, 300)
}
