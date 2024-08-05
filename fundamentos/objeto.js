const lista = {};
lista.nome = 'Gabriel'
lista.idade = 20

console.log(lista);

const modelos = {
    carro1: 'Uno',
    carro2: 'Mercedes',
    carro3: {
        nome1: 'Ferrari',
        nome2: 'Pop',
        carro4: {
            nome: 'XY',
            nome2: 'XYY'
        }
    }
}

console.log(modelos.carro3);
console.log(modelos.carro3.carro4);
console.log(modelos.carro3.carro4.nome2);