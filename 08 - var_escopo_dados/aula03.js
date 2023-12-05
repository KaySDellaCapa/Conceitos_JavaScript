// Escopos e Diferenças entre Var, Let e Const

// var - é o jeito antigo. Um pouco limitada e vaza escopos. Se restringe a escopos de funções
var teste1 = 'Teste'
console.log(teste1)

// const - para strings constantes. Se restringe ao escopo de bloco. Fica sempre com a primeira atribuição
const x = 10;
console.log(x)

// let - Qualque tipo de escopo. É reatribuivel
let teste2 = 'Teste'
console.log(teste2)