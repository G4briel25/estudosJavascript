const multiplicar = (numeroA, numeroB) => {
    let resultado = 0;

    for(let i = 0; i < numeroB; i++) {
        resultado += numeroA;
        return resultado
    }
}

const res = multiplicar(5, 5);
console.log(res);
