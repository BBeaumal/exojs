const scanf = require('scanf');

console.log('Please input the first word');
var firstWord = scanf('%s');
// console.log(firstWord);

console.log('Please input the second word')
var secondWord = scanf('%s');
// console.log(secondWord);

if (firstWord.length < 2 * secondWord.length) {
    console.log('Mot trop court');
} else {
    console.log('Mot trop long');
}