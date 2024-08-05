/*
 Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

*/

const resultado = (base, expoente) => {
    return `${base} elevado ${expoente} é ${base ** expoente}`
}

const res = resultado(5,5);
console.log(res);
