const pai = {nome: 'Fulano', corCabelo: 'preto'};

const filha1 = Object.create(pai);
filha1.nome = 'Maria'
filha1.corCabelo = 'Ruiva'

console.log(filha1.nome, filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome);
filha2.nome = 'Traves'

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);
