// Hoisting
// A ordem de declaração importa

var var1; // Não tem nada declarado

console.log(var1); // Não será lida

var var1 = 'Teste'; // Vai substituir a de cima

console.log(var1) // Vai ler


// ------------------------------------------------------

var teste1 = function() {
    console.log(teste1);
}

function teste2 () {
    console.log(teste2);
}

// Imprime normalmente
teste1(); // Este não é uma função, pois uma variavel não pode ser declarada como função
teste2();