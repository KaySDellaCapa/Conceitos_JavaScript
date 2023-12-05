// First class functions, Higher Order Functions, Function Declaration, Function Expression

// As funções são dinamicas

function falaMeuNome() {
    console.log('Meu nome é Kayque')
}

function falaMeuNomeCompleto() {
    falaMeuNome()
    console.log('Silva Della Capa')
}

falaMeuNomeCompleto(falaMeuNome);