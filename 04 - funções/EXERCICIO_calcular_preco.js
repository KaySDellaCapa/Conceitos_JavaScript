function criarDesconto(desconto, valor) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}


let precoEtiqueta = 100;
let formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(criarDesconto(precoEtiqueta, 10)); // 10% de desconto
} else if(formaPagamento ==2){
    console.log (criarDesconto(precoEtiqueta, 15))
}else if(formaPagamento === 3) {
    console.log(precoEtiqueta)
}else {
    console.log(aplicarJuros(precoEtiqueta, 10)); // 10% de juros, mas com outra função
}

console.log(200 * 0.10)
console.log(10 / 100)