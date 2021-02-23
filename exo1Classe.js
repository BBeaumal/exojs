class Hippotamus {
    constructor(name, weight, tuskSize) {
        this.name = name;
        this.weight = weight;
        this.tuskSize = tuskSize;
    }
    toString() {
        console.log('Hippotamus ', this.name, ' weight ', this.weight, 'kg and has tusks of ', this.tuskSize, 'cm');
    }
    swim() {
        this.weight = this.weight - (0.3);
        console.log(this.weight);
    }
    eat() {
        this.weight++;
        //    console.log(this.weight);
    }

    fight(Hippotamus) {
        if (this.tuskSize && Hippotamus.tuskSize == 0) {
            console.log('Tusksize cant be negative')
        }
        else if (this.tuskSize > Hippotamus.tuskSize) {
            console.log(this.name, 'won');
        } else {
            console.log(Hippotamus.name, 'won');
        }
    }
}

var hippo1 = new Hippotamus("Toto", 600, 20);
hippo1.toString();
hippo1.swim();
hippo1.toString();
var hippo2 = new Hippotamus("Dodo", 400, 50);

hippo1.fight(hippo2);