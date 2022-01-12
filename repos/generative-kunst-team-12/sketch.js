CircleSize = 0 // Kreisgröße beginnt bei Null
let angle = 0 // lässt die Ellipsen um den Mittelpunkt rotieren 
var speed = 3 


function setup() {
  createCanvas(500, 500);
 

}

function draw() {
   background(80,0,259,200); 
  
  translate(width/2,height/2) // zentriert Windrad 
  
fill(random(230,255),0,0)
stroke(random(60,80),0,259,200)
strokeWeight(10)
  
circle(random(190,200),random(190,200),CircleSize)  // Mittelpunkt des Kreises variiert leicht -> dadurch entsteht Flackern 
 CircleSize = CircleSize + speed // Kreisgröße wächst 
  

  let numberOfellipse= 50; // Anzahl der Ellipsen im Windrad 
  for (let i = 0; i < numberOfellipse; i++) { 
    // für i range(50) i bei jedem Durschlauf um eins erhöhen 
    rotate(angle)  
    // lässt die Ellipsen um den Mittelpunkt rotieren 
    fill(random(230,255),0,0)
    stroke(random(60,80),0,259,200)
    strokeWeight(10)
    ellipse(0, random(69,70), 60, 170) // Ellipsen; y-Koordinate variiert leicht und kreiert Flackern 

}
  angle = angle - 0.001 // lässt die Ellipsen um den Mittelpunkt rotieren 
  // durch - dreht sich Windrad gegen Uhrzeigersinn 
  

}



// Farbgebung: Füllfarbe der Elemente variiert in orange rottönen um ein Flackern zu kreieren 
//Outlinefarbe der Elemente: lila mit leichtem Flackern durch randmoisiertes rot und leichter Transparenz duch letzten Wert 

