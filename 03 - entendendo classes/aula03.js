// Funções recebendo objetos

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

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velha que é ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velha que é ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
    
} 

const vitor = new Pessoa('Vitor', 25);
const yago = new Pessoa('Yago', 34)

compararPessoas(vitor, yago) // Você passa a pessoa como p1 e p2 ao chamar a função