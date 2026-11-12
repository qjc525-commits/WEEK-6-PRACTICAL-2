class Coordinate {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    isInBounds(topX, topY, width, height) {
        if(this.x > topX && this.x < width && this.y > topY && this.y < height){
            return true
        } else {
            return false
        }
        }
    
    }


let click = new Coordinate()

function setup() {
    createCanvas(300,300);
    background(0);
    coordinate = new Coordinate(175, 350);
    console.log(coordinate.x);
    console.log(coordinate.y);
    
}

function mouseClicked() {
    click.x = mouseX;
    click.y = mouseY;
    if (click.isInBounds(0, 0 , width, height)) {
        fill(random(255), random(255), random(255));
        ellipse(random(width), random(height), random(100), random (100))
    }
}
