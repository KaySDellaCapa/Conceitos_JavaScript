// Declaração Explícita e Arrow Functions

// A principal diferença, é que a arrow function não tem contexto, ela não isola o código

function funcao1 () {
    console.log(this)
}

const funcao2 = () => { // Uma função anonima
    console.log(this)
}

const kayque = {
    nome: 'kayque',
    funcao1,
    funcao2
}

kayque.funcao1()
kayque.funcao2()