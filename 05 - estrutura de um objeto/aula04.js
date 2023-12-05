// Acessando dinamicamente os valores
// Torna o código mais dinâmico
// Se precisar acessar o atributo que não sabe o nome, pode receber como parametro

const pessoa = {
    nome: 'Kayque Silva Della Capa',
    idade: 20,

    // pode usar o valores acima
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

// DINAMICO
pessoa['nome'] = 'teste'; // Pega 'teste' e coloca no atributo 'nome'. Pode ser recebido como parametro
// ACESSO DIRETO
pessoa.nome = 'teste'

const atributo = 'idade';

console.log(pessoa(atributo)); // retorna a idade da pessoa