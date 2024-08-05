const imprimaResultado = function (nota) {
    switch (nota) {
        case 10:
            console.log("Quadro de honra");
            // break;

        case 6:
            console.log("Aprovado");
            break;

        case 4:
            console.log("Reprovado");
            // break;            
        default:
            console.log("Nota inválida!");            
            break;
    }
}

imprimaResultado(10);