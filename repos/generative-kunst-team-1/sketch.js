var angle = 0;

function setup() {
  createCanvas(500, 500);
  angleMode (DEGREES); 
}

function draw() {
  // Hintergrundfarbe:
  background(242, 212, 174,10); //Transparency für den Verzögerungseffekt
  rectMode (CENTER); 
  
  push ();

    translate (250, 250) //Ursprung ist jetzt im Zentrum des Canvas
    rotate (angle);
    fill (3, 126, 140, 150);
    square (0, 0, 400);
    angle++; //ermöglicht die Drehung

  pop(); // alles zwischen push und pop ist vom Rest abgetrennt zu betrachten

  fill (166, 56, 86, 100);
  drawSquare(250, 250, 10); // (x - Position, länge der Seiten, wie oft die Rekursion durchgeführt werden soll)
}

function drawSquare(x, length, level) { //Funktion die die Rekursion ermöglicht
  square (x, height / 2, length); //height / 2 damits Mittig ist -> Man könnte das Gleiche auch für x machen
  noStroke();
  if (mouseIsPressed) { //Random Color bei gedrückter Maus
    const BB = random (0, 265);
    const RR = random (0, 265);
    const GG = random (0, 265);
    const HH = random (0, 280);
    fill (RR, GG, BB, HH); 
    //fill (166, 56, 86, HH);
  }
  if (level > 1) {
    level = level - 1;
    drawSquare(x - length / 2, length / 2, level); //(Verschiebung auf der x Achse, Quadrat wird verkleinert, neuer Level)
    drawSquare(x + length / 2, length / 2, level); //hier - statt + damit auf beiden Seiten ein Quadrat erstellt wird
  }
}