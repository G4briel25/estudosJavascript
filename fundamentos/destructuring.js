const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    endereco: {
        logradouro: 'Rua legal',
        numero: 1142
    }
}
console.log(pessoa);
console.log('=================================');

const { nome, idade } = pessoa;
console.log(nome, idade);

console.log('=================================');

const { endereco: { logradouro, numero, cep = true }} = pessoa;
console.log(logradouro, numero, cep);
