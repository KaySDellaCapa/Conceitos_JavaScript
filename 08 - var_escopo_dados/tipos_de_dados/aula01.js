/*
    boolean
    null
    undefined
    number
    string
    symbol
*/


// Pode usar tipagagem distintas com valores distintos

// boolean
true, false // Tipo primitivo
new Boolean(true) // object

// NaN
console.log(10 - 'text') // Não vai conseguir converter

// =
console.log(10 == '10') // Aqui é comparando o tipo
console.log(10 === '10') // vai desconsiderar, não é exatamente igual
console.log(10 != '10') // Vê se é diferente

// null
const x = null; // essa variavel não recebe valor
let y; // Ausencia de declaração
console.log(x);
console.log(y);

// Todos são number = +Infinty -Infinity e NaN

// Symbol - cria um simbólo único e imutável

const m = Symbol('10')
const n = Symbol('10')
console.log(n === m); // volta false, pois são únicos e não podem se parecer. Uma forma para definir identificadores

// object
const k = { // Uma coleção dinâmica de chaves e valores
    nome: 'Kayque',
    idade: 20
}

x.sobrenome = 'Silva Della Capa'

console.log(typeof k)
console.log(x.nome) // acessando valor de objeto
console.log(x['nome']) // acessando valor de objeto

x.falar = function() {
    console.log('teste')
}
x.falar() // chama a função

// Pode criar uma pessoa, com suas caracteristicas e fala. NÃO FUNCIONA COM ARROWFUNCTION PQ ELAS NÃO TEM CONTEXTO
const pessoa = { // Uma coleção dinâmica de chaves e valores
    nome: 'Kayque',
    idade: 20,
    dialogar: function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

pessoa.dialogar()