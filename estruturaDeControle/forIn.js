const notas = [9.8, 4.5, 2.8, 1.9, 7.6];

for(let i in notas) {
    console.log(`${i} - Nota ${notas[i]}`);    
}

console.log("===================================");

const pessoa = {
    nome: 'Fulano',
    idade: 24,
    peso: 71.5
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);    
}