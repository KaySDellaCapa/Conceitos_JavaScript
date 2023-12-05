// Formas de criação de objetos literais com protótipos

// PRIMEIRA FORMA - SIMPLES

const pessoa = {
    genero: 'Masculino'
}

const kayque = {
    nome:'Kayque',
    __proto__: pessoa
}

console.log(kayque.genero)

// SEGUNDA FORMA

const pessoa2 = {
    genero: 'Masculino'
}

const yago = Object.create(pessoa2)

yago.nome = 'Yago'

console.log(yago.genero)

