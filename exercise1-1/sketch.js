class Star {
    x;
    y;
    speedX;
    speedY;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 3;
        this.speedX = 3;
    }

    draw() {
        fill(255, 234, 0);
        noStroke();

        triangle(this.x, this.y - 50, this.x - 20, this.y, this.x + 20, this.y);
        triangle(this.x - 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x + 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x - 20, this.y - 5, this.x, this.y + 10, this.x - 35, this.y + 30);
        triangle(this.x, this.y + 10, this.x + 20, this.y - 5, this.x + 35, this.y + 30);
    }

    fall() {
        this.y += this.speedY;
    }
   

    shoot() {
        this.x += this.speedX;
    }
}

function setup() {
    createCanvas(400, 400);
    frameRate(3);
    myStar = new Star(100,100);
    fallingStar = new Star(200, 100);
    shootingStar = new Star(100, 200)
    
}

function draw() {
    background(0);

    myStar.draw();
    myStar.fall();
    myStar.shoot();
    fallingStar.fall(2);
    fallingStar.draw();
    shootingStar.draw();
    shootingStar.shoot(5);

}
