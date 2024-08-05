/*
 Faça um algoritmo que calcule o fatorial de um número.
*/

const calcularFatorial = (numero) => {
    if(numero < 0) {
        return false;
    } else if (numero == 0) {
        return 1;
    } else {
        return numero * (calcularFatorial(numero - 1));
    }
}

const res = calcularFatorial(5);
console.log(res);
