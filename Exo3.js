const scanf = require('scanf');

const tableau = [];

for (i = 0; i < 5; i++) {
    console.log('Please input a number');
    var number = scanf('%d');
    tableau.push(number);
    }

console.log('tableau ' + tableau);
