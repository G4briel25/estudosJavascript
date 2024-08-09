/*
 Crie uma função que recebe um número (de 1 a 12) e retorne o mês 
 correspondente como uma string. Por exemplo, se a entrada for 2, 
 a função deverá retornar "fevereiro", pois este é o 2° mês.
*/


// Resolução 1
const nomeDoMes = (num) => {
    const meses = ['Janeiro', 'Fervereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    if(num >= 1 && num <= 12) {
        console.log(meses[num - 1]);
    } else {
        console.log("Número do mês inválido!");
    }

}

nomeDoMes(10);


// Resolução 2
const nomeDoMes2 = (num) => {
    const meses2 = ['Janeiro', 'Fervereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses2[--num];
}

console.log(nomeDoMes2(12))