/*
 Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
 como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
 numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

const calculadora = (num1, sinal, num2) => {
    switch (sinal) {
        case '+':
            const soma = num1 + num2;
            console.log(`A soma dos dois números é ${soma}`);
            break;
        
        case '-':
            const sub = num1 - num2;
            console.log(`A subtração dos dois números é ${sub}`);
            break;
        
        case '*':
            const mult = num1 * num2;
            console.log(`A multiplicação dos dois números é ${mult}`);
            break;
        
        case '/':
            const divisao = num1 / num2;
            console.log(`A divisão dos dois números é ${divisao}`);
            break;
        
        default:
            console.log("Operação inválida!");            
            break;
    }
}

calculadora(5, '*', 5);