/*
 Um funcionário irá receber um aumento de acordo com o seu plano de
 trabalho, de acordo com a tabela abaixo:
        
        Plano Aumento
        A  -  10%
        B  -  15%
        C  -  20%

    Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido
*/

const calcular = (plano, salarioAtual) => {
    switch (plano) {
        case 'A':
            const planoA = 0.10;
            const novoSalarioA = salarioAtual * (1 + planoA);

            console.log(`Seu novo salário é ${novoSalarioA.toFixed(2)}`);
            break;

        case 'B':
            const planoB = 0.15;
            const novoSalarioB = salarioAtual * (1 + planoB);

            console.log(`Seu novo salário é ${novoSalarioB.toFixed(2)}`);
            break;

        case 'C':
            const planoC = 0.20;
            const novoSalarioC = salarioAtual * (1 + planoC);

            console.log(`Seu novo salário é ${novoSalarioC.toFixed(2)}`);
            break;
    
        default:
            break;
    }
}

calcular('A', 1000);
calcular('B', 1000);
calcular('C', 1000);