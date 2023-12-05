let numero = 4;

let numeroPar = (numero % 2) === 0; // pode altrar o número divisivel

if (numeroPar) {
    console.log('Par...') // Se for True, executa está linha de código
} else {
    console.log('Impar...')
}


// poderia continuar com essa estrutura:
//if (!numeroPar) { // Uma negação é uma exclamação. Converte para o oposto
   // console.log('Impar...')
//}