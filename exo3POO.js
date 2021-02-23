const Point = require('./exo2POO');

class Circle {
    constructor(Point, radius) {
        this.Point = Point;
        this.radius = radius;
    }

    area() {
        return Math.pow(`${this.radius}`, 2) * Math.PI;
    }
    containsPoint(point) {
        let dist = Math.sqrt(Math.pow((point.membreX - this.Point.membreX), 2) +
            Math.pow(point.membreY - this.Point.membreY, 2));
        if (dist = 0) {
            return true;
        }
        return false;
    }
}

Point pointA = new Point(2, 3);
Circle cercle1 = new Circle(pointA, 5);


