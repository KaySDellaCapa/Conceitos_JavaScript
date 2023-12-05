/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o
    preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida
    e efetuar o calculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto
    - À vista no Dinheiro ou pix, recebe 15% de desconto
    - Em duas vezes, preço normal de etiqueta sme juros
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%
*/

let precoEtiqueta = 100;
let formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(`O valor do produto é R$ ${precoEtiqueta}`);
} else if(formaPagamento ==2){
    console.log (`O valor do produto é R$ ${precoEtiqueta * 0.10}`)   
}else if(formaPagamento === 3) {
    console.log(`O valor do produto é R$ ${precoEtiqueta * 0.15}`)
}else if(formaPagamento === 4) {
    console.log(`O valor do produto é R$ ${precoEtiqueta}`)
}else {
    console.log(`O valor do produto é R$ ${precoEtiqueta * 0.10}`)
}