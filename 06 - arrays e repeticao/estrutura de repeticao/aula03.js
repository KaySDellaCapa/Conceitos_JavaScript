// Exibindo notas com For

const notas = [];


notas.push(8);
notas.push(9);
notas.push(6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = [i];
    soma = soma + nota;
    
}

const media = soma / notas.length // Divide pelo número de notas que há
console.log(media);