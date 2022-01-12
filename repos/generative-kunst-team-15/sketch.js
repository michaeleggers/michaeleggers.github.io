
// Bild Variable mit dem Namen img.
let img;
//Canvas Variable.
let can;


//Läd die Bild Datei in die Variable.
function preload(){
  //Setzt die Variable img gleich der gewünschnten Bild Datei.
  let z = Math.floor(Math.random() * 10);

  if(z==0){
    img = loadImage('1.jpeg');
  }
  if(z==1){
    img = loadImage('2.jpeg');
  }
  if(z==2){
    img = loadImage('3.jpeg');
  }
  if(z==3){
    img = loadImage('4.jpeg');
  }
  if(z==4){
    img = loadImage('5.jpeg');
  }
  if(z==5){
    img = loadImage('6.jpeg');
  }
  if(z==6){
    img = loadImage('7.jpeg');
  }
  if(z==7){
    img = loadImage('8.jpeg');
  }
  if(z==8){
    img = loadImage('9.jpeg');
  }
  if(z==9){
    img = loadImage('10.jpeg');
  }

  
}

//Setup Variable
function setup() {

  //Erstellung des Canvas
  can = createCanvas(img.width, img.height);

  //Canvas in die Mitte des Windows setzten.
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  can.position(newCanvasX, newCanvasY);
  

  //Bild Pixel Informationen holen

  for(let col = 0; col< img.width; col+= Math.random() * (200 - 2) + 2){
    for(let row = 0; row <img.height; row += Math.random() * (200 - 2) + 2){

      let c = img.get(col,row);
      //Farbe des Punkts wird an den Bild Pixel angepasst.
      stroke(color(c));
      //Größe des Kreises wird Zufällig bestimmt.
      strokeWeight(Math.random() * (15 - 5) + 5);
      point(col, row);

    }
  }

}

//Draw function wiederholt den gleichen Vorgang für immer sodass nach kurzer Zeit der Canvas gefüllt ist.
//Durch das ständige erneuern kommt eine Dynamic in das Bild

function draw(){


  for(let col = 0; col< img.width; col+=Math.random() * (200 - 2) + 2){
    for(let row = 0; row <img.height; row +=Math.random() * (200 - 2) + 2){

      

      let c = img.get(col,row);
      //Farbe des Punkts wird an den Bild Pixel angepasst.
      stroke(color(c));
      //Größe des Kreises wird Zufällig bestimmt.
      strokeWeight(Math.random() * (15 - 5) + 5);
      point(col, row);

    }
  }

}


