/*
 Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 triângulo).


    Para calcular a área do triângulo equilátero, multiplicamos o quadrado da medida do lado pela raiz de 3 dividido por 4.

*/


//Meu código
const classificacaoDoTriangulo = (lado1, lado2, lado3) => {
    if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
        console.log("Equilátero");
    } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log("Isósceles");
    } else if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        console.log("Escaleno");
    } else {
        console.log("Dado inválido!");        
    }
}

classificacaoDoTriangulo(5, 5, 5);
classificacaoDoTriangulo(8, 8, 2);
classificacaoDoTriangulo(3, 7, 9);

console.log("*************************************************************");

// Codigo do chatgpt
function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

console.log(classificarTriangulo(8,8,8));
console.log(classificarTriangulo(6,1,1));
console.log(classificarTriangulo(3,7,9));

