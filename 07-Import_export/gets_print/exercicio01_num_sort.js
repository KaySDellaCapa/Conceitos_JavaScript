/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1- 100.
    Faça um programa que receba os 5 números para os alunos e mostre o maior.

    Dados de entrada:
    5
    50
    10
    98
    23

    Sáida:
    98

*/

const {gets, print} = require('./funcoes_auxiliares.js');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
}

let maiorNumero = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado > maiorNumero) {
        maiorNumero = numerosSorteado;
    }
}

print(maiorNumero);