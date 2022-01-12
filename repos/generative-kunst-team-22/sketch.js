// Initalisieren und deklarieren der Variablen
const konfetti = [];
var gravity;

function setup() {
  createCanvas(500, 500);

// Festlegen der Starthöhe
  for(let x = 0; x < width; x++) {
    konfetti[x] = random(height); 
  }

// Festlegen der Gravitation -> 0 = Norden, 1 = Osten, 2 = Süden, 3 = Westen
  gravity = random(3);
  gravity = round(gravity);

// Festlegen der Farbe und Größe
  stroke(random(255),random(255),random(255));
  const ctx = canvas.getContext('2d');
  ctx.lineWidth = 5;
}

function draw() {
  background(32);

  // Bewegen der Punkte (Konfetti) gemäß geltender Gravitation

  for (let x = 0; x < konfetti.length; x++) {
    // Bestimmen der Richtung (hin zum / weg vom Koordinatenursprung)
    // Hin zum Koordinatenursprung 
    if (gravity == 0 || gravity == 3) {
      konfetti[x] -= random(5);
      // Verhindern des Rausfallens aus dem Canvas
      if (konfetti[x] < 0) {
        konfetti[x] = height;
      }
    } 

    // Weg vom Koordinatenursprung
    else if (gravity == 2 || gravity == 1) {
      konfetti[x] += random(5); 
      // Verhindern des Rausfallens aus dem Canvas
      if (konfetti[x] > height) {
        konfetti[x] = 0;
      }
    }

    // Bestimmen der Falllinie (horizontal oder vertikal)
    // horizontal
    if (gravity == 1 || gravity == 3) {
      point(konfetti[x], x);
    }
    // vertikal
    else {
      point(x, konfetti[x]);
    }
    
    stroke(random(255),random(255),random(255))
  }
}