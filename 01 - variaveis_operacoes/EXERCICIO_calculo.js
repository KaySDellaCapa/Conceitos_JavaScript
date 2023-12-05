/*
Faça um programa para calcular o valor de uma viagem
Você terá 3 variaveis sendo elas: 
1- preço do comubistvel, 
2- Gasto médio do combustivel por dia por KM, 
3-Distancia em KM de viagem
*/

const precoCombustivel = 5.79;
const KmPorLitros = 10;
const distancia = 100;

let litrosConsumidos = distancia / KmPorLitros;
let valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2)); // Resultado do valor gasto
// Vai converter em string, mas vai arrendondar para duas casas decimais
