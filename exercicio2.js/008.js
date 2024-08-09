const multiplicar = (numeroA, numeroB) => {
    let resultado = 0;

    for(let i = 0; i < numeroB; i++) {
        resultado += numeroA;
    }
    console.log(resultado);
}

multiplicar(5, 5);
multiplicar(0,7);
