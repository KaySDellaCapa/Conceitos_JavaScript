// Reduce

const lista = []

const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    return previous + current; // 10+2=12
}, 0)

console.log(somaDeTodosOsNumeros)