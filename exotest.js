let a = [1, 2];
let b = [3, 4];

let c = [...a, ...b];

console.log(c);

console.log(Math.max(...c));

//Methode à étudier 
//console.log(c.reduce(...c));