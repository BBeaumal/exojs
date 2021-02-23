class Point {
    constructor(membreX, membreY) {
        this.membreX = membreX;
        this.membreY = membreY;
    }

    getX() {
        return `${this.membreX}`;
    }
    setX(x) {
        this.membreX = x;
    }
    getY() {
        return `${this.membreY}`;
    }

    setY(y) {
        this.membreY = y;
    }

    toString() {
        return `Le point a les coordonnees suivantes :  (${this.membreX}, ${this.membreY}) `;
    }
}

var pointA = new Point(2, 1);
console.log(pointA.toString());
pointA.setX(4);
console.log(pointA.toString());