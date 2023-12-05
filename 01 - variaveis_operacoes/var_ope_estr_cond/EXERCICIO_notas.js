/*
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre de
    sua média e sua classificação conforme a tabela abaixo

    Media = (nota 1 + nota 2 + nota 3) / 3

    Classificação:
    - Media menor que 5, reprovação
    - Media entre 5 e 7, recuperação
    - Media acima de 7, passou de semestre;
*/

let aluno = 'Yago'

let nota1 = 7;
let nota2 = 7;
let nota3 = 7;
let media = (nota1+nota2+nota3) / 3;
console.log(media)

if (media < 5) {
    console.log('Aluno reprovado!')
} else if (media >= 5 && media <=7) {
    console.log('Aluno em recuperação!')
} else {
    console.log('Aluno aprovado!')
}

