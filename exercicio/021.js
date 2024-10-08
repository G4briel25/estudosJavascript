/*
 Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
 considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
 de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
 idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
*/

const valorAPagar = (idade) => {
    const todosPagam = 100;

    if (idade < 10) {
        const criancaPaga = todosPagam + 80;
        console.log("Crianças com menos de 10 anos pagam R$", criancaPaga);        
    } else if (idade < 30 && idade >= 10) {
        const conveniadoEntre10e30 = todosPagam + 50;
        console.log("Conveniados com idade entre 10 e 30 anos pagam R$", conveniadoEntre10e30);        
    } else if (idade >= 30 && idade < 60) {
        const conveniadoSegundaIdade = todosPagam + 95;
        console.log("Conveniados com idade entre 30 e 60 anos pagam R$", conveniadoSegundaIdade);
    } else {
        console.log("Conveniados acima de 60 anos pagam", (todosPagam + 130));
    }
}

valorAPagar(8);
valorAPagar(28);
valorAPagar(45);
valorAPagar(85);