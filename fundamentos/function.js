function soma(a, b) {
    console.log(a + b);
}

soma(2, 3);
soma('g', 'a')
soma(false, false)

console.log('=========================');

const imprima = function(a) {
    console.log(a);
}
imprima('Legal')

const imprima2 = (a, b) => {
    return a - b;
}
console.log(imprima2(5, 1));

const imprima3 = texto => texto;
console.log(imprima3('Texto aqui!'));

const imprima4 = (a, b) => a * b;
console.log(imprima4(5, 5));
