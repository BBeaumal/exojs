const Point = require('./exo2POO.js');

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y
        this.radius = radius;
    }

    area() {
        return Math.pow(`${this.radius}`, 2) * Math.PI;
    }
    containsPoint(point) {
        let dist = Math.sqrt(Math.pow((point.membreX - this.x), 2) +
            Math.pow(point.membreY - this.y, 2));
        if (dist = 0) {
            return true;
        }
        return false;
    }
}

Point.pointA = new Point(2, 3);
Circle cercle1 = new Circle(1, 2, 5);


