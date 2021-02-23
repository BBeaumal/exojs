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
        return `${this.membreX}`;
    }
    getY() {
        return `${this.membreY}`;
    }

    setX(y) {
        return `${this.membreY}=${y}`;
    }

    toString() {
        return `Le point a les coordonnees suivantes :  (${this.membreX}, ${this.membreY}) `;
    }
}

var pointA = new Point(2, 1);
console.log(pointA.setX(5));
console.log(pointA.toString());