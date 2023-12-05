// Funcionamento das Promises
// Serve para manipular o resultado
// A maioria das coisas que são assincronas são manipuladas com promessas
// Vai resolver num tempo que não nos cabe. É uma promessa

const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 100)
})

console.log('Vai, filhão')

promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
        return value +10
    })
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('Finalizou')
    })