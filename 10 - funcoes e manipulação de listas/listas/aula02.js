// Filter

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const ListaDosNumerosPares = lista.filter((element) => {
    return element % 2 === 0; // true or false
}) // Retorna se mantém ou não na função, resultado

console.log(lista)
console.log(ListaDosNumerosPares)