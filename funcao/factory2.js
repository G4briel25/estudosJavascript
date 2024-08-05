function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Leite', 54.00));
console.log(criarProduto('Carne bovina', 80.24));
console.log(criarProduto('Arroz', 17.99));
