
function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  frameRate(6)
  f = 100
}

function draw() {
    f = f-2
  background(62, 54, f, 40); //setzen der Hintergrundfarbe mit Transparenz
  translate(width/2 - 150,height/2 - 150) //verschieben des Zentrums
  colorMode(RGB)
  colorMode(HSB, 100); //setzen des HSB Farbmodus
  for (i = 0; i < 4; i++) {
    firework(random()*300,random()*300,random(0,100));    //aufrufen der firework funktion mit x und y als random Zahl mal 300 und eine Zahl von 0 bis 100 für die Farbe
  }
}


function firework(x,y,color) {
  translate(x,y) //die Mitte verschieben, wie in den parametern mitgegeben
  for (i = 0; i < 90; i++) { 
    noStroke();
    fill(color, random(50,100), random(70,100)) //setzen der Farbe jedes einzelnen der 90 rects

    rect(0,random(),random(1,5),random()*250-i); //erstellen des eigentlichen rects
    rotate(i); //das rect um i drehen
  }    
}