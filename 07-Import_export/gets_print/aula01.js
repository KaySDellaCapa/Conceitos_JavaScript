// Object Destruction

const {gets, print} = require('./funcoes_auxiliares.js'); // Criou duas variaveis com o que está recebendo

print(gets()); // Poupa linha de código

const pessoa = {
    nome: 'Kayque'
};

const {nome} = pessoa;
// const nome = pessoa.nome; EQUIVALENTE

// GETS SIMULA AS ENTRADAS E PRINT AS SAÍDAS