let snowflakes = []; // array to hold snowflake objects
let bg, maskshape; // declare images
let stage = 'init'; // init, fall

let fakeTimer = 1; // fake timer that starts at 1

function setup() {
  bg = loadImage('images/snowglobe.png')             // load image as bg
  maskshape = loadImage('images/Subtract.png')       // load image as maskshape
  createCanvas(814, 967);                            // background image and canvas have to be the same size
  for (let i=0; i<400; i++) {
    snowflakes.push({x: random(0, width), y: random(-550,30), d: random(2,6)})          // append snowflake objects
  }
  noStroke();                                        // removes stroke effect around snowflakes
  // console.log('s');                                  // for test in web console
}

function draw() {
  shake();                                           // call function shake
  image(bg, 0, 0);                                   // create background image in top-left corner
  if(mouseIsPressed == true){                        // check that mouse button is continuously pressed
    // console.log(fakeTimer)                           // for test in web console
    fakeTimer++;                                     // increase fake timer by 1 as long as mouse is pressed
    if(fakeTimer > 70) {
      stage = 'fall';                                // once fake timer reaches 70 enter 'fall' stage
  }
}
  if(stage =='fall') {
    oneFallDownStep();                               // if in 'fall' stage, call oneFallDownStep function
  }
}

function shake() {
  image(bg, 0, 0);
  if(mouseIsPressed == true){
    translate(random(-5,5),random(-5,5));            // canvas moves back and forth as long as mouse is pressed
  }
}

function oneFallDownStep() {
  for (let i=0; i<400; i++) {
    let snowflake = snowflakes[i] 
    snowflake.y += random(1, 4)                      // snowflakes "move" down
    if(snowflake.y> 540) {                           // snowflakes start from the top once they reach 540, the bottom of the snowglobe
      snowflake.y = 0 
      snowflake.x = random(0, width)
    } 
    circle(snowflake.x, snowflake.y, snowflake.d)    // a snowflake is a circle with a diameter
  }
  image(maskshape, 0, 0); // Top-left corner of the img is at (0, 0)
}
