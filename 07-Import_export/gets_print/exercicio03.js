/*
    3- Faça um programa que calcule e imprima o sálario a ser trasnferido para um
    funcionário.
    Para realizar o calculo receba o valor bruto do sálario e o adicional dos
    beneficios. O sálario a ser trasferido é calculado da seguinte maneira:

    O valor bruto do sálario - percentual de imposto mediante a faixa salarial +
    adicional dos beneficios.

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%

*/

const {gets, print} = require('./funcoes_auxiliares.js');

const valorSalarioBruto = gets();
const adicionalDosBenenficios = gets();
const pegarAliquota = gets();

function calcularPorcentagem(salario, percentual) {
    salario * (percentual/100)
}

function pegarPercentualSalario(salario) {
    if (salario >= 0.00 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return  10;
    } else if (salario >= 2500) {
        return   15;
    }
}

const aliquotaImposto = pegarPercentualSalario(valorSalarioBruto);
const valorImposto = calcularPorcentagem(valorSalarioBruto, aliquotaImposto);

const valorATransferir = valorSalarioBruto - valorImposto + adicionalDosBenenficios;

print(valorATransferir)