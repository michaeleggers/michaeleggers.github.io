//Variabeln für die Partikel werden generiert
function Particle() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 4;
    this.h = 0;

// Position vom vorherigem Frame wird zwischengespeichert
    this.prevPos = this.pos.copy();

// Geschwindigkeit, Position und Beschleunigung wird am nähesten liegen Vektor angepasst
    this.update = function () {

        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    //Kraft wird jedem einzelnen Partikel addiert 
    this.applyForce = function (force) {

        this.acc.add(force);
    }
    //Design der Partikel
    //Schleife überprüft ob der Farbwert 255 erreicht, springt dann auf null zurück
    //Sorgt dafür das alle Farben einmal drankommen
    this.show = function () {

        stroke(0, 0, 0, 5);
        //stroke(r, g, b, 5);
        //stroke(this.h, 255, 255, 5);
        this.h = this.h + 1;
        if (this.h > 255) {
            this.h = 0;
        }
        strokeWeight(1);
        //mal zwischen vorherigem und neuem Partikeln eine Linie in jedem neuem Frame
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);

        //point(this.pos.x, this.pos.y);
        this.updatePrev();
    }
    //Neue Postition wird als alte abgespeichert
    this.updatePrev = function () {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }
    //Wenn Partikel die Kante wird die Position an die gegenüberliegende weitergeben
    this.edges = function () {
        if (this.pos.x > width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        if (this.pos.x < 0) {
            this.pos.x = width;
            this.updatePrev();
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        if (this.pos.y < 0) {
            this.pos.y = height;
            this.updatePrev();
        }
    }
//Jeder Partikel sucht sich den nächst liegenden Vektor und übernimmt die Eigenschaften
    this.follow = function (vectors) {
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);

}
