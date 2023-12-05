// Juntou os dois exercicios

function escrevaMeuNome(nome) {
    return `Meu nome é ${nome}`
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Kayque') + 'Maior de idade');
    } else {
        console.log("Menor de Idade");
    }
}

verificarIdade(17);