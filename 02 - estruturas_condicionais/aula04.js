// numero par precisa ser multiplo de 2
// Se sobrar resto na divisão, o número é impar

let numero = 10;

let numeroPar = (numero % 2) === 0; // Retorna True ou False
let numeroPar2 = numero % 2;

console.log(numeroPar, numeroPar2)

// Se no let numeroPar = (numero % 2) === 0;, o 0 tivesse aspas, retornaria false, pois seria uma 
let numeroPar3 = (numero % 2) === '0'
console.log(numeroPar3)
// Se usar 3x o '=' é para ter exatidão.