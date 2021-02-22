const scanf = require('scanf');

const tableau = [];
var valeurMax = 0;
var somme = 0;

for (i = 0; i < 5; i++) {
    console.log('Please input a number');
    var number = scanf('%d');
    tableau.push(number);

    if (tableau[i] > valeurMax) {
        valeurMax = tableau[i];
    }

    somme += tableau[i];

}

console.log('tableau ' + tableau);
console.log('La valeur max du tableau est ' + valeurMax);
console.log("Elle se situe à l'indice " + tableau.indexOf(valeurMax));
console.log("La somme des nombres dans le tableau est de " + somme)

