// Função é um bloco de código que pode chamar a qualquer momento

function teste() {
    console.log('Teste');
}

teste(); // Invoca a função


function myName (nome) {
    console.log(`Seu nome é ${nome}`);
}

myName('Kayque'); // Automazita a função passando parametros

function quadrado(valor) {
    return valor + valor;
}
console.log(quadrado(10) + quadrado(10)); // pode chamar várias vezes a função

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo
}
console.log(incrementarJuros(100, 10));