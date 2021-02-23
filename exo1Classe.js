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
        // console.log(this.weight);
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
var hippo2 = new Hippotamus("Dodo", 400, 50);

hippo1.fight(hippo2);

//LifeCycle de 3 semaines
for (t = 0; t < 21; t++) {
    //1 journée
    for (i = 0; i < 15; i++) {
        hippo1.eat() * 2 + hippo1.swim() * 3;
    }
    console.log('A la fin de la journée ', t+1, '', hippo1.name, 'pese ', hippo1.weight, 'kg');
}
console.log('A la fin des 3 semaines ', hippo1.name, 'pese ', hippo1.weight, 'kg')