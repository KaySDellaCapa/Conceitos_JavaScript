function calcularIMC(peso, altura) {

}

function classificarIMC(imc) {

}

function main() { // a função principal sempre se chama main
    const peso = 76;
    const altura = 1.66;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc))
}

main = function () {
    console.log(1) // As funções podem manipular como se fossem objetos
}

main();

/* 
Existem funções sem nome, que geralmente são usadas em Web. Geralmente utilizados 
uma vez só. Assim:

Já ocorre a invocação da função anonima

(function() { // a função principal sempre se chama main
    const peso = 76;
    const altura = 1.66;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc))
})();

*/