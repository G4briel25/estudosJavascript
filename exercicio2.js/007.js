/*

NÃO RESOLVIDO por mim :(

*/

/*
 Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) 
 e retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. 
 Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, 
 considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, 
 seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.
*/


const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    } else {
        return numero > minimo && numero < maximo;
    }
}

// Exemplos de uso
console.log(estaEntre(10, 50, 100)); // retornará true, 10 está entre 50 e 100
console.log(estaEntre(16, 100, 160)); // retornará false, 16 não está entre 100 e 160
console.log(estaEntre(3, 3, 150)); // retornará false, 3 não está estritamente entre 3 e 150
console.log(estaEntre(3, 3, 150, true)); // retornará true, 3 é incluído como valor mínimo com 'inclusivo = true'
