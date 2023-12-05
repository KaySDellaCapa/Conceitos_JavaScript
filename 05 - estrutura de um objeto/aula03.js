const kay = {
    nome: 'Kayque Silva Della Capa',
    idade: 20,

    // pode usar o valores acima
    descrever: function () { // Método
        // this uma função dentro do método. Um contexto. Eel assume o objeto
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

kay.altura = 1.66;

// delete kay.nome; //usado para deletar

console.log(kay, nome);
console.log(kay, idade);
console.log(kay); 

kay.descrever();