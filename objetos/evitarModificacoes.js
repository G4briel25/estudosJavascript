// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});
console.log('Extensível:', Object.isExtensible(produto)); // Significa que pode alterar os valores

produto.nome = 'Borracha';
produto.descricao = 'Qualquer descricao aqui' // não permitira adicionar valor no objeto
delete produto.tag;
console.log(produto);


// ----------------------------------------
// Object.seal
const pessoa = {nome: 'Fulano', idade: 34};
Object.seal(pessoa) // Não permiti adicionar e nem excluir, mas permite alterar o valor
console.log('Selado:', Object.isSealed(pessoa));

pessoa.nome = 'Cicrano'
delete pessoa.nome
console.log(pessoa);
