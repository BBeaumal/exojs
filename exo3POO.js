const Point = require('./exo2POO');

class Circle {
    constructor(Point, radius) {
        this.Point = Point;
        this.radius = radius;
    }

    area() {
        return (`${this.radius}` ^ 2) * 3.14;
    }
    containsPoint(point){
        
    }
}

Point pointA = new Point(2, 3);
Circle cercle1 = new Circle(pointA, 5);


