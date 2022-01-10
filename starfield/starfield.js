class Star {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

var stars = [];
const numStars = 100;
let winFlagImg;

const canvasX = 600;
const canvasY = 600;
// Not *really* a camera. This is the viewport transformation, rather.
const camX = canvasX / 2;
const camY = canvasY / 2;
const starMinX = -canvasX;
const starMaxX =  canvasX;
const starMinY = -canvasY;
const starMaxY =  canvasY;


function preload() {
  winFlagImg = loadImage('./assets/win95.svg');
}

function setup() {
  createCanvas(canvasX, canvasY);
  
  
  for (let i=0; i<numStars; i++) {
    var star = new Star(
      random(starMinX, starMaxX), random(starMinY, starMaxY), random(0, 5)
    );
    stars.push(star);
  }
  var centerStar = new Star(0, 0, 5);
  stars.push(centerStar);
}

function updateStars() {
  stars.forEach((star) => {
    star.z -= 0.06;
    if (star.z <= 0) {
      star.z = 5;
      star.x = random(starMinX, starMaxX);
      star.y = random(starMinY, starMaxY);
    }
  })

}

function draw() {
  background(0);
  
  updateStars();
  
  stroke(0, 0, 0, 0);
  fill(255, 255, 255, 255);
  stars.forEach((star) => {
    var x = (star.x / star.z) + camX;
    var y = (star.y / star.z) + camY;
    var imgSize = 1-abs(star.z / 5.01);
    var imgSizeExpl = 1-abs(star.z / 4.0); // looks like small explosions
    imgSize *= 60;
    
    //rect(x, y, imgSizeExpl*10, imgSizeExpl*10);

    image(winFlagImg, x - imgSize/2, y - imgSize/2, imgSize, imgSize, 0, 0);
  })
}

