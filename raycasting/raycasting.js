const MAP_X = 10
const MAP_Y = 10
const TILE_SIZE = 32.0
const GAME_MAP = [
  'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w',
  'w', '_', '_', '_', 'w', '_', '_', '_', '_', 'w',
  'w', '_', '_', '_', 'w', '_', '_', '_', '_', 'w',
  'w', '_', '_', '_', 'w', '_', '_', '_', '_', 'w',
  'w', '_', '_', '_', 'w', '_', '_', '_', '_', 'w',
  'w', '_', 'w', 'w', 'w', '_', '_', '_', '_', 'w',
  'w', '_', '_', '_', '_', '_', '_', '_', '_', 'w',
  'w', '_', '_', '_', '_', '_', '_', '_', '_', 'w',
  'w', '_', '_', '_', '_', '_', '_', '_', '_', 'w',
  'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'
]

class Player {
  constructor(pos, dir) {
    this.pos = pos
    this.dir = p5.Vector.normalize(dir)
  }

  draw() {
    fill('red')
    circle(this.pos.x, this.pos.y, 10)
    stroke('red')
    strokeWeight(3)
    line(this.pos.x, this.pos.y, this.pos.x + 20*this.dir.x, this.pos.y + 20*this.dir.y)
  }
}

let player

function index(x, y) {
  return y * 10 + x
}

function updatePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    player.dir.rotate(-0.1)
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.dir.rotate(0.1)
  }
  if (keyIsDown(UP_ARROW)) {
    player.pos.add(p5.Vector.mult(player.dir, 2.0))
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.pos.sub(p5.Vector.mult(player.dir, 2.0))
  }
}

function drawMap2D() {
  for (let y=0; y<MAP_Y; y++) {
    for (let x=0; x<MAP_X; x++) {
      let tile = GAME_MAP[index(x, y)]
      if (tile === 'w') {
        fill(255)
      }
      else {
        fill(80)
      }
      stroke('black')
      strokeWeight(1)
      rect(TILE_SIZE*x % (TILE_SIZE*MAP_X), TILE_SIZE*y, TILE_SIZE, TILE_SIZE)
    }
  }
}

function screenspaceToTilespace(pos) {
  return { x: pos.x % TILE_SIZE, y: pos.y % TILE_SIZE }
}

// Converts a pixel position to a tilenumber
function screenspaceToTilenumber(pos) {
  let tileX = Math.floor(pos.x / TILE_SIZE)
  let tileY = Math.floor(pos.y / TILE_SIZE)

  return { x: tileX, y: tileY }
}

function raycast(pos, dir) {
  // current pos within tile
  let tilePos = screenspaceToTilespace(pos)

  let dirX = Math.sign(dir.x)
  let dirY = Math.sign(dir.y)

  // console.log('made it here 1')

  // distance from pos within tile to next tile in ray's direction
  let dx = TILE_SIZE - tilePos.x
  let dy = TILE_SIZE - tilePos.y
  if (dirX === -1) dx = tilePos.x
  if (dirY === -1) dy = tilePos.y
  
  // console.log('made it here 2')

  // first vertical hitpoint
  let firstVerticalX = pos.x + dirX*dx
  let slopeX = dir.y / dir.x
  let firstVerticalY = pos.y + dirX*slopeX*dx
  let verticalHitpoint = createVector(firstVerticalX, firstVerticalY)

  // first horizontal hitpoint
  let firstHorizontalY = pos.y + dirY*dy
  let slopeY = dir.x / dir.y
  let firstHorizontalX = pos.x + dirY*slopeY*dy
  let horizontalHitpoint = createVector(firstHorizontalX, firstHorizontalY)

  const MAX_RAY_LENGTH = 1000.0
  let closestHitpoint = createVector(0.0, 0.0)
  let testTile = screenspaceToTilenumber(pos)

  // draw first and subsequent vertical hitpoints
  while (p5.Vector.sub(closestHitpoint, pos).mag() < MAX_RAY_LENGTH) {

    strokeWeight(0)
    fill('orange')

    if (p5.Vector.sub(verticalHitpoint, pos).mag() < p5.Vector.sub(horizontalHitpoint, pos).mag()) {
      closestHitpoint = createVector(verticalHitpoint.x, verticalHitpoint.y)
      verticalHitpoint.x += dirX*TILE_SIZE
      verticalHitpoint.y += dirX*slopeX*TILE_SIZE
      testTile.x += dirX
    }
    else {
      closestHitpoint = createVector(horizontalHitpoint.x, horizontalHitpoint.y)
      horizontalHitpoint.x += dirY*slopeY*TILE_SIZE
      horizontalHitpoint.y += dirY*TILE_SIZE
      testTile.y += dirY
    }

    // check if wall is hit
    if (GAME_MAP[index(testTile.x, testTile.y)] === 'w') {
      return closestHitpoint
    }
  }

  return closestHitpoint
}

function setup() {
  // put setup code here
  frameRate(30)

  createCanvas(640, 600)

  player = new Player(createVector(110.0, 100.0), createVector(1.0, 1.0))
}

function drawMap3D(samples) {
  let dir = createVector(player.dir.x, player.dir.y).normalize()
  let xOffset = 320
  let resX = 320
  let resY = 300
  let fov = 60
  let colWidth = resX / samples
  let angleStep = fov / samples
  for (let i = 0; i < samples; i++) {
    let rDir = p5.Vector.rotate(dir, radians(-samples/2.0*angleStep + i*angleStep))
    let beta = dir.angleBetween(rDir)
    let hit = raycast(player.pos, rDir)
    let depth = p5.Vector.sub(hit, player.pos).mag()
    let correctedDepth = depth * Math.cos(beta)
    // console.log('depth: ' + depth)
    let sliceHeight = map(correctedDepth, 0.0, 300.0, resY, 0)
    let projSliceheight  = sliceHeight / correctedDepth * 40.0
    // console.log('mapped depth: ' + depth)
    let vis = map(sliceHeight, 0, resY, 0, 255)
    let slack = Math.max(0.0, resY - projSliceheight)
    let offsetY = slack/2.0

    // Draw 3D world
    strokeWeight(0)
    stroke(vis)
    fill(vis)
    rect(xOffset + i*colWidth, offsetY, colWidth, projSliceheight)

    // Debug Rays
    strokeWeight(1)
    stroke('yellow')
    line(player.pos.x, player.pos.y, hit.x, hit.y)
    fill('cyan')
    strokeWeight(0)
    rect(hit.x-2.5, hit.y-2.5, 5, 5)
  }
}

function draw() {
  background(0)

  updatePlayer()

  drawMap2D()
  drawMap3D(320)
  player.draw()

  // Draw 3D View boundaries
  noFill()
  strokeWeight(1)
  stroke('red')
  rect(320, 0, 640, 300)

  
}