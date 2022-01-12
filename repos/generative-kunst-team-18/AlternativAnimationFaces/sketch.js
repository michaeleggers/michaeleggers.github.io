function setup() {
  createCanvas(900, 900);
  frameRate(1)
}

function draw() {
  //colorMode(RGB)
  //background(255,255,255,60);
  noStroke();
  
  randomHead(random(255)); //aufrufen der Kopf Funktion mit random Zahl für den parameter color
}

function randomHead(color){
  //headPosition = [random(800),random(800)]
  //translate(headPosition[0],headPosition[1]);
  background(255);
  translate(width/2,height/2);
  headTypeList = ['circle','triangle','square'] //liste mit den 3 möglichen Kopftypen
  headType = random(headTypeList) //bestimmen des Kopftyps für den aktuellen Kopf
  colorMode(HSB)
  drawHair(); //aufrufen der Haar Funktion
  fill(30,30,random(30,120));

  //im folgenden: erstellen des kopfes je nach kopftyp
  if (headType == 'circle'){
    circle(0, 0, 300);
  }
  else if (headType == 'triangle'){
    triangle(150, -150, -150, -150, 0, 150);
  }
  else if (headType == 'square'){
    square(-150,-150,300)
  }

  drawEyes(); //aufrufen der Augen Funktion
  drawMouth(); //aufrufen der mund funktion
  
}

function drawEyes(){
  fill(0,0,100)
  eyeType = []
  eyeHeight = random(-80,-30) //bestimmen der Höhe der Augen
  circle(30, eyeHeight, 40); //erstellen des ersten auges
  circle(-30, eyeHeight, 40); //erstellen des zweiten auges
  fill(0,0,0) //farbe setzen auf schwarz
  pupilHeight = random(-10,10)
  pupilWidth = random(-10,10)
  circle(30+pupilWidth, eyeHeight+pupilHeight, 10); //erstellen der ersten Pupille
  circle(-30+pupilWidth, eyeHeight+pupilHeight, 10); //erstellen der zweiten Pupille
}

function drawMouth(){
  noFill();
  mouthTypeList = ['sad', 'happy', 'suprised'] //liste mit den 3 möglichen Mundtypen
  mouthType = random(mouthTypeList) //bestimmen des aktuellen Mundtyps
  stroke(0,0,0)
  mouthHeight = random(-10,10) //bestimmen der Mundposition

  // im folgenden: erstellen der 3 Münder
  if (mouthType == 'sad'){
    curve(5, 16+mouthHeight, 0, -5+mouthHeight, 26, -10+mouthHeight, 73, 14+mouthHeight, 0, 63+mouthHeight, 61, -10+mouthHeight);
  }
  else if (mouthType == 'happy'){
    curve(-30,0+mouthHeight,-10,20+mouthHeight,10,20+mouthHeight,30,10+mouthHeight,50,10+mouthHeight,70,0+mouthHeight);
  }
  else if (mouthType == 'suprised'){
    circle(0, 10+mouthHeight, 10);
  }
}

function drawHair(){
  hairColor = random(100),random(100),random(100) //bestimmen der Haarfarbe
  fill(hairColor)
  rect(-150,-200,300,random(50,300),random(50)) //erstellen des rects welches die haare darstellen soll
}