const scanf =require('scanf');

console.log('Please input the first word');
var firstWord = scanf('%s');

console.log('Please the second word')
var secondWord=scanf('%s');

if (firstWord.length < 2*secondWord.length){
    console.log('Mot trop court');
} else {
    console.log('Mot trop long');
}