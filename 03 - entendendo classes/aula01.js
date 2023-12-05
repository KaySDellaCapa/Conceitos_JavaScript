// Como criar classes e instâncias

// Você cria uma classe pessoa e pode colocar criar/codar quantas quiser para ir dentro da classe

class Pessoa { // É uma definição do que deve ser
    nome;
    idade;
    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

// É uma instância de uma pessoa
const kay = new Pessoa
kay.nome = 'Kay'
kay.idade = 20

const renan = new Pessoa
renan.nome = 'Renan'
renan.idade = 25

console.log(renan)
console.log(kay)
 