let a;
let b;
let c;
let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16); // Zahl ist eine Ganzzahl; Die Ganzzahl soll random Zahl sein ; Farben im Hex-Code --> Farbe mit dem höchsten Wert ist 167777215 
let randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
let randomColor3 = '#'+Math.floor(Math.random()*16777215).toString(16);
let randomColor4 = '#'+Math.floor(Math.random()*16777215).toString(16);


let s = 500; //Variable für Sonnne Start Punkt y-Koordinate
let m = 1000; //Variable für Mond  Start Punkt y-Koordinate 
let speed = 2; //Festgelegte Geschindigkeit wie schnell die Sonne und Mond sich bewegen

function setup() {
  createCanvas(800,800); 
}

function draw() {
  background(0,0,a,200); // Hintergrund mit Variable da sich der Hintergrund ändern soll

if((s>0) && (s < 500)) { //Hintergrundveränderung: Wenn die Sonne zwischen 0 und oder 500 ist (kooridinaten) --> dann gilt a=c
  a = c //Veränderung Hintergrund vorallem die Geschwindigkeit der Anpassung der Farbe beim Hintergrund
}
if((s > -555) && (s < 0)) { //Hintergrundveränderung: Wenn die Sonne zwischen -555 und oder 0 (koordinaten) --> ist dann gilt a=b
  a = b //Veränderung Hintergrund vor allem die Geschwindigkeit der Anpassung der Farbe beim Hintergrund
}

// SUN
fill(220,230,78); //Farbe von der Sonne
ellipse(210,s,100,100); //Kreis erstellt (x-Koordinate, y-Koordinate, Breite, Höhe) --> s = Variable verändert die Lokation der Sonne
s = s - speed 
if(s <= -555){ //Wenn die Sonne bei -555 oder einem kleineren Wert ankommt dann soll sie wieder bei 500 anfangen
  s = 500;

} 
c = (-1.8*(s-300)); //Variable zum verändern des Hintergrunds

// Moon
fill(240); //Farbe von dem Mond
ellipse(210,m,100,100); //Kreis erstellt (x-Koordinate, y-Koordinate, Breite, Höhe) --> s = Variable verändert die Lokation vom Mond
m = m -speed
  if(m<= - 555) { //Wenn der Mond bei -555 oder einem kleineren Wert ankommt 
    m = 500;

  }
b = -300 + m * 1.8;

// Mountain
fill(180,180,180); //Farbe des Berg hinten
strokeWeight(0); //Linienstärke gleich 0 somit keine Linie vorhanden 
triangle(360,130,760,500,-40,500); // Dreieck (x1,y1,x2,y2,x3,y3)
fill(128,128,128); //Farbe von Form auf Berg
strokeWeight(0); //Linienstärke gleich 0 somit keine Linie vorhanden
beginShape(); //Beginn einer Form
vertex(360,130); //Koordinaten von einem Punkt (x,y); verbinden sich zu einer Form 
vertex(485,246);
vertex(390,200);
vertex(360,250);
vertex(320,217);
vertex(255,250);
endShape(CLOSE); //Ende der Form wichtig

//other Moutntain
fill(220,220,220); //Farbe des Berg hinten
strokeWeight(0); //Linienstärke gleich 0 somit keine Linie vorhanden 
triangle(700,100,1000,500,400,500); // Dreieck (x1,y1,x2,y2,x3,y3)
fill(128,128,128); //Form auf Berg
strokeWeight(0); //Linienstärke gleich 0 somit keine Linie vorhanden
beginShape(); //Beginnn einer Form
vertex(700,100); //Koordinaten von einem Punkt (x,y); verbinden sich zu einer form 
vertex(800,300);
vertex(700,150);
vertex(665,170);
vertex(650,200);
endShape(CLOSE); //Ende der Form wichtig

//closer mountain
fill(220,220,220); //Farbe des Berges hinten
strokeWeight(0); //Linienstärke gleich 0 somit keine Linie vorhanden 
triangle(100,100,500,500,-260,500); // Dreieck (x1,y1,x2,y2,x3,y3)
fill(128,128,128); //Form auf Berg
strokeWeight(0); //Linienstärke gleich 0 somit keine Linie vorhanden
beginShape(); //Beginn einer Form
vertex(100,180); //Koordinaten von einem punkt (x,y); verbinden sich zu einer Form 
vertex(255,280);
vertex(140,250);
vertex(120,290);
vertex(70,260);
vertex(-20,286);
endShape(CLOSE);

// Hills
fill(255,255,255); //Farbe von Boden Ellipse
ellipse(500,750,2000,700); //Kreis (x-Koordinate, y-Koordinate, Breite, Höhe)
fill(255,255,255); 
ellipse(440,600,1000,400);


// Haus_eins
fill(140,140,140); //Hausdach (rot,grün,blau)
quad(550,530,500,500,450,500,400,530); //Vieleck (x1,y1,x2,y2,x3,y3,x4,y4)
fill(randomColor);//Rechteck Farbe random siehe oben code 
rect(420,530,110,110); //Rechteck (x- Koordinate, y-Koordinate, Breite, Höhe)

fill(140,140,140);//fenster
rect(430,540,35,40); //Rechteck (x- Koordinate, y-Koordinate, Breite, Höhe)
rect(430,590,35,40);
rect(480,540,35,40);
rect(480,590,35,40);

fill(randomColor); //Selbe Farbe wie Haus
rect(420,558,110,5); //Rechteck (x- Koordinate, y-Koordinate, Breite, Höhe)
rect(445,530,5,110);
rect(420,608,110,5);
rect(495,530,5,110);

fill(140,140,140); //Schornstein Farbe rot,grün,blau
rect(427,500,12,16); //Rechteck (x- Koordinate, y-koordinate, Breite, Höhe)
fill(44); //Dach von Schornstein
rect(424,499,17,4) //Rechteck (x- Koordinate, y-Koordinate, Breite, Höhe)

//Haus_zwei
fill(140,140,140); //Hausdach (rot,grün,blau)
quad(740,480,780,480,800,500,720,500); //Vieleck (x1,y1,x2,y2,x3,y3,x4,y4)
fill(randomColor3);//Rechteck Farbe random siehe oben code 
rect(735,500,50,140);

fill(140,140,140); //Fenster
rect(741,508,15,30); //Rechteck (x- Koordinate, y-koordinate,breite,höhe)
rect(764,508,15,30);
rect(741,548,15,30);
rect(764,548,15,30);
rect(741,588,15,30);
rect(764,588,15,30);

fill(randomColor3); //Rechteck Farbe random siehe oben code 
rect(735,520,50,5); //Rechteck (x- Koordinate, y-Koordinate, Breite, Höhe)
rect(735,560,50,5);
rect(735,600,50,5);
rect(746,500,5,140);
rect(769,500,5,140);

fill(44);
rect(740,475,40,5);
//fill(140,140,140);
rect(744,470,10,9);

//Haus_drei
fill(140,140,140); //Hausdach (rot,grün,blau)
quad(600,530,640,530,670,570,570,570); //Vieleck (x1,y1,x2,y2,x3,y3,x4,y4)
fill(randomColor2);//Rechteck Farbe random siehe oben code 
rect(585,570,70,70);

fill(140,140,140);//Bogenform Tür art mit Kreis und Rechteck
ellipse(620,600, 40);
rect(600,600,40,40);

//Haus_vier
fill(randomColor4);//Rechteck Farbe random siehe oben Code 
quad(250,580,350,580,350,640,250,640);
fill(140,140,140); //Hausdach (rot,grün,blau)
quad(270,550,330,550,360,590,240,590); //Vieleck (x1,y1,x2,y2,x3,y3,x4,y4)


fill(140,140,140);//Fenster haus vier
rect(293,605,15);
rect(271,605,15);
rect(315,605,15);

//Baum_eins
fill(0,140,0); //Ellipse gefüllt
ellipse(684,590,50); //Kreis 
fill(44) //Stamm Form erstellen
beginShape(); //Form gestartet
vertex(684,640); //Koordinaten von einem Punkt (x,y); verbinden sich zu einer Form 
vertex(690,640);
vertex(684,580);
vertex(685,620);
vertex(678,600);
endShape(CLOSE);


//Straße
fill(140,140,140); //Farbe der Straßen
rect(0, 640, 1000, 100,); //Rechteck (x-Koordinate, y-Koordinate, Breite, Höhe)

//Striche auf der Straße (Bedingung immer erfüllt)
for( i = 0; i < 20 ; i++){
  fill(455)
  rect(i*100,685,50,10)
  }

}
