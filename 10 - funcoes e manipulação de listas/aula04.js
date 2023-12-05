// Invocação Direta, Call, Apply e Operador New

const pessoa = {
    nome: 'Kayque',
    idade: 20
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olá,']) // Passa o contexto e os atributos da função
gritar.call(pessoa, 'Ola,')