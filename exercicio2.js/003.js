/*
 Desenvolva uma função que recebe dois parâmetros, um é a quantidade 
 de horas trabalhadas por um funcionário num mês, e o quanto ele recebe 
 por hora. O retorno da função deve ser a string "Salário igual a R$ Х", 
 em que Х é o quanto o funcionário ganhou no mês
*/

const calcularSalario = (horasT, ganhoPHora) => {
    console.log(`Salário igual a R$ ${horasT * ganhoPHora}`);
};

calcularSalario(150, 40.5);
