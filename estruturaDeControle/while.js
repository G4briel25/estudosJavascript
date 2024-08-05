const getInteiroAleatorioEntre = function (min, max) {
    const valor =  Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

// Enquanto o valor for True ele executa, caso vire Falso ele para de rodar
while (opcao != 5) {
    opcao = getInteiroAleatorioEntre(5, 10)
    console.log(`A opção foi: ${opcao}`);
}
console.log("Valeu é nois");
