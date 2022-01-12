// Generieren von Variabeln

// Wert zum Rechen
var inc = 0.1;
// Skalierung
var scl = 30;
// Zeilen und Spalten
var cols, rows;

// bring mehr Variation in Vektorenberechnung
var zoff = 0;

//Framerate
var fr;

//Array für die Partikel
var particles = [];

//Canvas für Partikel
var flowfield;

//Totenkopf png
let img;
function preload() {
  img = loadImage('Bilder/skull1.png');
}

//Setup
function setup() {
  createCanvas(1024, 1024);
  colorMode(HSB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");

  //Beschreibung des Flowfields
  flowfield = new Array(cols * rows);

  //Generieren von Partikeln (atm 7000 Stück)
  for (var i = 0; i < 7000; i++) {
    particles[i] = new Particle();
  }
  background(255);

  //Totenkopfs Position (genau mittig)
  image(img, 256, 256, 512, 512);

}
//Zeichenfunktion
function draw() {

// Raster wird berechnet, welches mit zufälligen Grauwerten mit hilfe der offsets
// und dem noise berechnet wird um in anschluss vektoren aus dem Grauwert zu bestimmen.
  var yoff = 0;
  for (var x = 0; x < rows; x++) {
    xoff = 0;
    for (var y = 0; y < cols; y++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var r = noise(xoff, yoff) * 255;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.5); //Beeinflusst Animation direkt, wie Partikel am Vektor beeinflusst wird
      flowfield[index] = v;
      xoff += inc;

      stroke(0, 50);

// theoretisch zeichenfunktion für die einzelnen Vektoren
      /* push();
       translate(x * scl, y * scl);
       rotate(v.heading());
       strokeWeight(1);
       line(0, 0, scl, 0)
       pop();*/
    }
    yoff += inc;
    zoff += 0.0001; //Beeinflusst Animation direkt, wie Stark die Partikel aufeinanderliegen 
  }
  //Jeder einzelene Partikel wird geupdated, neu berechnet, ect.
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();

  }
//Canvas wird als jpg zwischengespeichert auf Kommando "s" 
  if (key === "s") {
    save("myCanvas.jpg");
  }
//Framerate wird angezeigt  
  fr.html(floor(frameRate()));

}
