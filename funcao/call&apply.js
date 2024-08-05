function getPreco(imposto = 0, moeda = 'R$')  {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}

global.preco = 20
global.desconto = 0.1
console.log(getPreco());

console.log(produto.getPreco());

const carro = {preco: 49990, desconto: 0.20};
console.log(getPreco.call(carro)); // Call é como se fosse o this, vc vai escpcificar qual o valor vc quer na função

//console.log(getPreco.apply(carro));
// Apply tbm se usa igual ao Call, porém vc pode usar array nele
console.log(getPreco.apply(carro, [0.20, 'R$'])); //adiciona 0.20 de imposto!
