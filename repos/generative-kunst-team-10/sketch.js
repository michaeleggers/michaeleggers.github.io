let snowflakes = [] //leere liste (let definiert eine variable)
let numberSnowflake = 500 // Anzahl der Schneeflocken
var sonne = 500; //anfangsposition sonne
var mond = 1000; //anfangsposition mond
var speed = 2; // schnelligkeit
var a;
var b;
var c;


function setup() {
  createCanvas(600,750);
  for (let i = 0; i < numberSnowflake; i++) {
    snowflakes.push({x: random(0, width), y: random(0, height), d: random(0.01,0.1)}); // zufällige koordinaten der Schneeflocken in die liste einfügen
  }
}
function draw() {
  background(0,0,a); // Variable a, da sich der Hintergrund verändert
  tag_nacht();
  berge();
  snowflake();
}

function snowflake() {
  for (let i = 0; i < numberSnowflake; i++) {
    let snowflake = snowflakes[i] // i-te Schneeflocke der Liste
    snowflake.y += snowflake.d*30 // Bewegung der Schneeflocken von oben nach unten
    if (snowflake.y > height) { // wenn y-Koordinate höher als height ist
      snowflake.y = 0 // dann y-K wieder 0
      snowflake.x = random(0, width) // und x-K wieder random an eine Stelle gesetzt
    }
    fill(248,248,255);
    noStroke(); // Außenlinie von Schneeflocken weg
    drawSnowflake(snowflake.x, snowflake.y, snowflake.d); // Kreise als Schneeflocken
    
  }
}

function drawSnowflake(x,y,d) {
  beginShape(); //Freie Form für schneeflocken
  vertex(d*-20+x,d*80+y); // x & y Koordinaten werden jeweils mit d multipliziert damit die Größe der Schneeflocken variiert
  vertex(d*20+x,d*80+y); // x & y wird zu den Koordinaten jeweils noch addiert, damit die Schneeflocken sich bewegen
  vertex(d*20+x,d*40+y);
  vertex(d*40+x,d*60+y);
  vertex(d*60+x,d*50+y);
  vertex(d*40+x,d*20+y);
  vertex(d*80+x,d*20+y);
  vertex(d*80+x,d*-20+y);
  vertex(d*40+x,d*-20+y);
  vertex(d*60+x,d*-40+y);
  vertex(d*40+x,d*-60+y);
  vertex(d*20+x,d*-40+y);
  vertex(d*20+x,d*-80+y);
  vertex(d*-20+x,d*-80+y);
  vertex(d*-20+x,d*-40+y);
  vertex(d*-40+x,d*-60+y);
  vertex(d*-60+x,d*-40+y);
  vertex(d*-40+x,d*-20+y);
  vertex(d*-80+x,d*-20+y);
  vertex(d*-80+x,d*20+y);
  vertex(d*-40+x,d*20+y);
  vertex(d*-60+x,d*40+y);
  vertex(d*-40+x,d*60+y);
  vertex(d*-20+x,d*40+y);
  endShape(CLOSE)
}

function tag_nacht() {
  if((sonne > 0) && (sonne < 500)) { // Wenn die Sonne sich zwischen 0 & 500 befindet
    a = c // Bestimmt momentane Farbe des Hintergrund (wird bestimmt durch c)
  }
  if((sonne > -600) && (sonne < 0)) { // Wenn sich die Sonne oberhalb des Canvas befindet
    a = b // Bestimmt momentane Farbe des Hintergrund (wird bestimmt durch b)
  }
  fill(255,255,0);
  circle(200,sonne,100);
  sonne = sonne - speed
  if((sonne < -600) && (sonne < 0)){ // Wenn sich die Sonne oberhalb des Canvas befindet
    sonne = 500; // Wird die Position wieder auf 500 gesetzt
  }
  c = (-2*(sonne-500)); // Bestimmt Veränderung des Hintergunds
  fill(250,250,210);
  circle(400,mond,100);
  mond = mond - speed
  if ((mond < -600) && (mond < 0)){ // Wenn sich der Mond oberhalb des Canvas befindet
    mond = 500; // Wird die Position wieder auf 500 gesetzt
  }
  b = -500+mond*2; // Bestimmt Veränderung des Hintergunds
}

function berge() { // Freie Formen für die Berge
  beginShape();
  vertex(0,490);
  vertex(500,600);
  vertex(150,320);
  vertex(100,350);
  vertex(50,300);
  vertex(0,390);
  fill(176,196,222); // Farbfüllung der Bergen
  endShape(CLOSE)

  beginShape();
  vertex(0,750);
  vertex(600,750);
  vertex(600,400);
  vertex(500,170);
  vertex(400,340);
  vertex(300,320);
  vertex(170,450);
  vertex(150,448);
  vertex(120,430);
  vertex(100,450);
  vertex(60,400);
  vertex(0,490);
  fill(100,149,237);
  endShape(CLOSE)

  beginShape()
  vertex(0,750);
  vertex(600,750);
  vertex(600,300);
  vertex(450,490);
  vertex(390,430);
  vertex(370,450);
  vertex(300,400);
  fill(65,105,225);
  endShape(CLOSE)

  beginShape();
  vertex(0,750);
  vertex(0,550);
  vertex(30,500);
  vertex(55,522);
  vertex(80,470);
  vertex(110,515);
  vertex(125,525);
  vertex(150,490);
  vertex(400,750);
  fill(60,30,250);
  endShape(CLOSE)

  beginShape();
  vertex(70,750)
  vertex(600,750);
  vertex(600,500);
  vertex(560,450);
  vertex(500,530);
  vertex(470,490);
  vertex(455,515);
  vertex(400,505);
  vertex(377,482);
  vertex(340,520);
  vertex(300,470);
  vertex(250,580);
  vertex(230,570);
  vertex(205,525);
  vertex(150,650);
  vertex(120,600);
  fill(25,25,112);
  endShape(CLOSE);

  beginShape();
  vertex(500,190);
  vertex(430,300);
  vertex(500,250);
  vertex(560,330);
  fill(248,248,255);
  endShape(CLOSE)

  beginShape();
  vertex(50,315);
  vertex(17,380);
  vertex(50,350);
  vertex(110,380);
  fill(248,248,255);
  endShape(CLOSE)

  beginShape();
  vertex(560,465);
  vertex(515,530);
  vertex(560,500);
  vertex(600,530);
  fill(176,196,222);
  endShape(CLOSE)
}