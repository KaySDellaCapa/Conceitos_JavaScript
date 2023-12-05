// Join e Combinação de Funções de Manipulação

const lista = [{nome: 'Kayque'}, {nome: 'Andressa'}, {nome: 'Vitor'}, {nome: 'Giovanna'}]

const elementosEmHtml = lista
    .filter((e) => e.nome.startsWith('A'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)