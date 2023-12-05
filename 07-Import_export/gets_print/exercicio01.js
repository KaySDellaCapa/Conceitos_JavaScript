/*

    1- Faça um programa que receba a media de um aluno. 
    Caso a média seja < 5 imprima "Reprovado"
    Caso a médoa seka >= 5 e < 7 imprima "Recuperação"
    Caso a média seja >= 7 imprima "Aprovado"

*/

const {gets, print} = require('./funcoes_auxiliares.js');

const media = gets();

if (media <= 5){
    print('Reprovado')
} else if (media >= 5 && media < 7){
    print("Recuperacao")
} else if (media > 7) {
    print ("Aprovado");
} else {
    print ('Erro!');     //Caso o usuário digite algo diferente do esperado
}