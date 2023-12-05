// O número precisa ser multiplicavel por cinco.
// Se der zero, o número será inválido

let numero = 12;

let isNumeroPar = (numero % 5) === 0; //Para boas práticas, coloca is para booleanas

// Pode usar quantos else if quiser
if (numero === 0) {
    console.log('O número é inválido...')
} else if (numeroPar) {
    console.log('Sim') 
} else if (numero === 5) {
    console.log('O número é inválido')
} else {
    console.log('Não')
}

// VERSÃO OTIMIZADA:

let numero2 = 5;
const isNumeroPar2 = (numero % 5) === 0;

if (isNumeroPar2) {
    console.log("Par") // Nessa caso precisa estar dentro da estrutura IF
} else {
    console.log ("Ímpar");     
}