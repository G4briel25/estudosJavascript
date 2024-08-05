/*
 Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
 e o resto da divisão destes dois valores.
*/

const resultado = (dividendo, divisor) => {
    resultado2 =  dividendo / divisor;
    resto = dividendo % divisor;

    console.log(`A divisão é ${resultado2}`);
    console.log(`O resto é ${resto}`);
}

resultado(10,3);
