// dark red = 174, 4, 4
// red  = 255, 51, 51
// orange = 255, 187, 51
// yellow = 252, 252, 131

// Farbewerte
const redColour = [174, 255, 255, 244];
const greenColour = [4, 51, 187, 244];
const blueColour = [4, 51, 51, 131];
let r,g,b;
let index, transp;

// Koordinaten für Form
let x,y,e,c;

// Anzahl der erzeugten Formen
let quantity;

// Bilder
let words;

function setup() { // Hintergrund wird erzeugt
  createCanvas(800, 1100);
  background(110, 29, 36,300);
  noLoop();
}

// lädt Bild hoch
function preload(){
  words = loadImage("Group 1.png"); // 822 x 383 px
}

function draw() {
   // oberer teil
  quantity = random(width / 150, height / 130);
  for (let i = 0; i < quantity; i++){
    // Werte werden mit der random Funktion zugewiesen
    // Koordinaten:
    x = random(100, width - 100);
    y = random(80, 200);
    // Größe
    e = random(30,70);
    // Schwung der Linie
    c = random(5,10);
  
    // Farben:
    index = random(redColour.length);
    r = redColour[parseInt(index)];
    g = greenColour[parseInt(index)];
    b = blueColour[parseInt(index)];
    transp = random(150,270);
    // für lesbarkeit der Schrift, wird Form transparenter
    if (y >= 100){
      transp -= 80;
    }
    //Form Funktion wird aufgerufen und die vorbestimmte Werte überliefert
    form(x,y,e,c,r,g,b,transp);
  }
  // unterer teil
  quantity = random(width / 50, height / 35);
  for (let i = 0; i < quantity; i++){
    // Werte werden mit der random Funktion zugewiesen
    // Koordinaten:
    x = random(100, width - 100);
    y = random(400, height - 100);
    // Größe
    e = random(30,70);
    // Schwung der Linie
    c = random(5,10);

    // Farben:
    index = random(redColour.length);
    r = redColour[parseInt(index)];
    g = greenColour[parseInt(index)];
    b = blueColour[parseInt(index)];
    transp = random(150,270);
    // für lesbarkeit der Schrift, wird Form transparenter
    if (y <= 480){
      transp -= 100;
    }
    //Form Funktion wird aufgerufen und die vorbestimmte Werte überliefert
    form(x,y,e,c,r,g,b,transp);
  }
  // Bild wiedergeben
  rectMode(CENTER); // bild zentriert
  image(words, width / 50, height / 10 ); 
  rectMode(CORNER);
}



function form(x,y,e,c,r,g,b,transp) {
  // Komplexe Form wird erzeugt
  beginShape();
  // erster Ankerpunkt
  vertex(x, y - e);
  fill(r, g, b, transp);
  stroke(300);
  //definiert einen Kontrollpunkt und einen weiteren Ankerpunkt einer Bezier-Kurve
  quadraticVertex(x + c, y - c, x + e, y);
  quadraticVertex(x + c, y + c, x, y + e);
  quadraticVertex(x - c, y + c, x - e, y);
  quadraticVertex(x - c, y - c, x, y - e);
  // Formerzeugung wird gestoppt
  endShape();
}

function mousePressed() { //reset
background(110, 29, 36,300);
draw();
}
