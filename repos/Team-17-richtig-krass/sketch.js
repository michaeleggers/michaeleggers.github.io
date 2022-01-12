var animate = true; //Turn this to true if your computer can handle it at the level of detail that you've set
var angle = 0; //You can change this manually, or use the slider in the output
var limit = 10; //Turn this up for less lag. A good number for smooth animation is 4
var scrub = 0.01; //Slider bar scrubbing detail
var sizeMult = 0.26; //Fractal size relative to screen. Larger multipliers will increase detail
var brLenRatio = 0.67; //Size of child branch relative to parent
var geometrien=["rect","circle","triangle","line"]; //list all geometries

function setup() {
  slider = createSlider(0, TWO_PI, QUARTER_PI, scrub); //slider
  colorMode(HSB); //change colormode
  stroke_hue=random(360); //random starting color
  stroke_sat=100; //start value
  stroke_bri=100; //start value
  fill_sat=random(0,70) //random changing value for color sat
  fill_bri=random(0,70) //random changing value for color bri
  dicke=random(1,10)     //random stroke weight
  animMult =random(0.000001,0.001); //Multiply animation speed
  form=random(geometrien)  //random geometry
  color_changer=random(0.1,5) //random color changing speed
}

function draw() {
  createCanvas(windowWidth, windowHeight);//canvas updated sich automatisch zum window
 
  //set colors
  fill(stroke_hue,stroke_sat-fill_sat,stroke_bri-fill_bri)
  stroke(stroke_hue,stroke_sat,stroke_bri);
  background(235,100,35);

  if (animate === true) {
    angle = slider.value() + (millis() * animMult);
  } else {
    angle = slider.value();
  }
  //draws geometry (recurssion)
  strokeWeight(dicke);
  translate(width / 2, height/2);
  branch(height * sizeMult);
  translate(0,0);
  rotate(PI)
  inverseBranch(height * sizeMult);

  //color changer
  if(stroke_hue>=360){
    stroke_hue=0
  }
  else{
  stroke_hue=stroke_hue+color_changer
  }
}

//recurssion
function branch(length) {
  geometry(0,0,-length,-length,form);
  translate(0, -length);

  push();
  rotate(angle);
  if (length > limit) {
    branch(length * brLenRatio);
  }
  pop();

  push();
  rotate(-angle);
  if (length > limit) {
    branch(length * brLenRatio);
  }
  pop();

}
//recurssion
function inverseBranch(length) { 
  geometry(0,0,-length,-length,form);
  translate(0, -length);

  push();
  rotate(angle);
  if (length > limit) {
    branch(length * brLenRatio);
  }
  pop();

  push();
  rotate(-angle);
  if (length > limit) {
    branch(length * brLenRatio);
  }
  pop();

}

//function to draw the right geometry
function geometry(x,y,width,height,form){
  if(form==="rect"){
    return rect(x, y, width, height);
  }
  else if(form==="triangle"){
    return triangle(x, y, width, height, width/2, height/2);
  }
  else if(form==="circle"){
    return circle(x, y, width);
  }
  else if(form==="line"){
    return line(x, y, 0, height);
  }
}