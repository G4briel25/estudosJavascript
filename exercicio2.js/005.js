/*
 Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
*/

const maiorOuIgual = (num1, num2) => {
    if(num1 === num2) {
        return true;
    } else return false;
}

const maiorOuIgual2 = (num1, num2) => num1 === num2 ? true : false;


const res1 = maiorOuIgual2(0, 0);
const res2 = maiorOuIgual2(0, '0');
const res3 = maiorOuIgual2(5, 1);

console.log(res1);
console.log(res2);
console.log(res3);
