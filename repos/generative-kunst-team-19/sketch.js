let growth = 0.0;
let s = 0.0;
let angle = 0;
 
let planets = [];


function setup() {
  createCanvas(400, 400);
  
  //creates values for circles with a random position on the canvas, a random radius from 10-70, random colours and saves them to planets array
  for (let i = 0; i < 10; i++) {
    xNew = random(-width/2, width/2);
    yNew = random(-height/2, height/2);
    rNew = random(10, 70);
    cNew = [random(100,200), random(50,200), random(100,200)];
    
    values = [xNew, yNew, rNew, cNew];
    
    planets[i] = values;
  }
}

function draw() {
  background(40,50,80);
  
  //sets circling center
  translate(width/2, height/2);
  
  //lets planets + flower rotate around center
  rotate(angle);
  
  //creates 10 planets/circles
  for (let i = 0; i < 10; i++) {
    values = planets[i];
    noStroke();
    
    //colour
    fill(values[3]);
    //position and size
    circle(values[0], values[1], values[2]);
  }
  
  //increases angle each frame
  angle += 0.02;
  
  //calling flower function and creating 3 petal rows
  flower(3);

}


function flower(n){
  
  //growth speed
  growth = growth + 0.02;
  
  //lets flower grow bigger and then smaller
  s = -cos(growth)*2;
  
  //creates petal rows
  for (let i = n-1; i >= 0; i--){
    
    noStroke();
    //gives petal rows random colours for each frame
    fill(random(20,200), random(20,200), random(20,200));
    
    //lets petal rows grow depending on i and s
    scale(s/3 + i/2)
    
    //creates flower petals
    for (let j = 0; j < 10; j ++) {
      ellipse(0, 40, 20, 30);
      rotate(PI/5);
    }
  }
  

}
