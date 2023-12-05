// Orientação a Protótipo, Funções Construtoras

const pessoa = {
    genero: 'masculino'
}

const kayque = {
    nome: 'Kayque',
    idade: 20,
    __proto__: pessoa // vai herdar as caracteristicas
}


console.log(pessoa)
console.log(kayque)

// ------------------------------------

// Se começa com a letra maiscula é um construtor
function Pessoa (nome, idade){
    this.nome = nome
    this.idade = idade
}
Pessoa.prototype.falar = function() {
    console.log('Opa')
}

class Pessoa {
    constructor(nome,idade) {
        this.nome= nome;
        this._idade = idade;
    }
    falar() {
        console.log("Olá")
    }
    
}
