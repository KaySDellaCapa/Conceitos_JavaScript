/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro
    rodado. Crie um método que dado a quantidade de quilometros e o preço do combustivel,
    nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    
    calcularGastoPercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel //o this serve pq o gastomedio não está nessa classe
        // Vai dar a quantidade que gastou
    }
}

const tesla = new Carro('Tesla', 'Preto', 1/6.5.toFixed(2)) // Divindo o resultado vai para a variavel
console.log(tesla.calcularGastoPercurso(70, 5).toFixed(2));
