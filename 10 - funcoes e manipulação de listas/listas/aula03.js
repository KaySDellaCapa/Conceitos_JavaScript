// Map

class Pessoa {
    constructor(name) {
        this.name = name;
    }
}

const lista = [new Pessoa ('Renan'), new Pessoa ('Andressa'), new Pessoa ('Kayque'), new Pessoa ('Vitor'), new Pessoa ('Giovanna')]

const listaNomes = lista.map((element) => {
    return `
        <li>
            ${element.name}
        </li>
    
    `
})

console.log(listaNomes)


