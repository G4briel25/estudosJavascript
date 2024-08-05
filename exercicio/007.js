/*
 Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
 elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
 parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
 -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
 que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
 “Delta é negativo”.
*/

const formulaB = (a, b, c) => {
    const delta = (b ** 2) - (4 * a * c);

    if (delta < 0) {
        console.log("Delta é negativo, a equação não tem raízes reais.");
        console.log("**********************************************");
    } else {
        const raiz1 = ((-b) + Math.sqrt(delta)) / (2 * a);
        const raiz2 = ((-b) - Math.sqrt(delta)) / (2 * a);

        console.log("x1 =", raiz1);
        console.log("x2 =", raiz2);
        console.log("**********************************************");        
    }
};

formulaB(3, -5, 12);
formulaB(1, -5, 6);
formulaB(2, -7, 3);
