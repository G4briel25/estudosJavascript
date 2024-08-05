function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([980]));
console.log(rand([]));
console.log(rand([, 10]));


// Sendo o mês iniciado em zero, birthday será 10 de Janeiro de 1995
let birthday = new Date();
const a = birthday.getTime();
console.log(a);
