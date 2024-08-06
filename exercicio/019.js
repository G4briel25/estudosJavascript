/*
O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
            1    Cachorro Quente         R$ 3,00
            2    Hambúrguer Simples      R$ 4,00
            3    Cheeseburguer           R$ 5,50
            4    Bauru                   R$ 7,50
            5    Refrigerante            R$ 3,50
            6    Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const cardapio = (codigo, quantidade) => {
    switch (codigo) {
        case 1:
            const hotDog = 3 * quantidade;
            console.log(`O valor do produto é: R$ ${hotDog.toFixed(2)}`);
            break;    
        case 2:
            const hamburger = 4 * quantidade;
            console.log(`O valor do produto é: R$ ${hamburger.toFixed(2)}`);
            break;    
        case 3:
            const cheese = 5.50 * quantidade;
            console.log(`O valor do produto é: R$ ${cheese.toFixed(2)}`);
            break;    
        case 4:
            const bauru = 7.50 * quantidade;
            console.log(`O valor do produto é: R$ ${bauru.toFixed(2)}`);
            break;    
        case 5:
            const refri = 3.50 * quantidade;
            console.log(`O valor do produto é: R$ ${refri.toFixed(2)}`);
            break;    
        case 6:
            const suco = 2.80 * quantidade;
            console.log(`O valor do produto é: R$ ${suco.toFixed(2)}`);
            break;    
        default:
            console.log("Produto não existente");            
            break;
    }
}

cardapio(1, 1);
cardapio(2, 4);
cardapio(3, 2);
cardapio(4, 7);
cardapio(5, 5);
cardapio(6, 3);