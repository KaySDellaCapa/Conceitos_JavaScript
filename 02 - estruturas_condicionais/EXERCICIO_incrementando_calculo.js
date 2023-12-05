/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - preço do etanol
2 - preço da gasolina
3 - tipo de combustivel que está no carro
4 - gasto médio de combustivel do carro por KM
5 - Distância em KM de viagem

Imprima no console o valor que será gasto para realizar está viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitros = 10;
const distancia = 100;
const tipoCombustivel = 'Etanol;'
let litrosConsumidos = distancia / KmPorLitros;

if(tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEntanol;
    console.log(valorGasto.toFixed(2)); // nesse caso, precisa estar dentro da estrutura IF
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}