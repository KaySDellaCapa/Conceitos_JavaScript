// Criando uma instância com Constructor

class Pessoa { // É uma definição do que deve ser
    nome;
    idade;
    anoDeNasicmento;

    constructor(nome, idade) { // É o que acontence quando uma pessoa é instanciada
        this.nome = nome; // Nome que tá recebendo como parametro
        this.idade = idade; 
        this.anoDeNasicmento = 2023 - idade;
    
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

// É uma instância de uma pessoa
const kay = new Pessoa ('Kayque', 20); // Sempre chama o método construtor
const renan = new Pessoa ('Renan', 25);

console.log(renan);
console.log(kay);