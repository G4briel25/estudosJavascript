const repetir = (element, num) => {
    const resultado = []

    for(let i = 1; i <= num; i++) {
        resultado.push(element)
    }
    console.log(resultado);
    
}

repetir('código', 2);
repetir(7, 3);
