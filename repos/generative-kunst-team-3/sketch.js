//Variablen für die Position des Punktes
let x;
let y;

//Variablen für die Farben
let r;
let g;
let b;

//Variablen für Speichern und Pausieren
let saveButton
let mycanvas
let infoText = "p = pause, s = start"

function setup() {
  
  //Zeichenfläche und Startpunkt erstellen
  createCanvas(600, 600);
  x = width / 2;
  y = height / 2;
  
  //Zufällige Farbwerte in bestimmten Parametern
  r = random(100, 150);
  g = 0 //random(255);
  b = random(60);
  
  //Hintergrundfarbe
  background(0, 113, 82);
  
  //Save-Button erstellen und definieren, was Mausklick bewirkt
  saveButton = createButton('save')
  saveButton.position(0,0)
  saveButton.mousePressed(savePainting);
  
  //Erklärungstext zum Pausieren und Starten anzeigen
  text(infoText, 50, 20)
}

//Möglichkeit Bild zu speichern, durch Mausklick aufgerufen
function savePainting() {
  saveCanvas(mycanvas, 'myAwesomePainting', 'png');
}

// Taste "p" pausiert die Bewegung, "s" lässt sie fortfahren
function keyTyped() {
  if (key === 'p') {
    noLoop();
  } else if (key === 's') {
    loop();
  }
}

function draw() {
  
  //Framerate bzw. Zeichenschritte
  for (let i = 0; i < 6; i++) {
    step();
  }
}

function step() {
  
  //Zufällige Bewegungsschritte des Kreises (klein, damit Kreis nicht zu weit springt)
  x += random(-5, 5);
  y += random(-5, 5);
  
  //Beschränkung, sodass Kreis die Zeichenfläche nicht verlässt
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  
  //Farbe ändert sich mit jedem Schritt
  r += random(-1, 1);
  g += random(-1, 1);
  b += random(-1, 1);
  
  //Beschränkung der Farbwerte auf RGB-Farbraum, also keine negativen Zahlen und nicht über Höchstwert
  r = constrain(r, 100, 200);
  g = constrain(g, 0, 0);
  b = constrain(b, 0, 60);
  
  //kein Rand
  noStroke();
  //Kreis bekommt zufällige Farbe zugeteilt und wird gezeichnet
  circle(x, y, random(50));
  fill(r, g, b);
}
