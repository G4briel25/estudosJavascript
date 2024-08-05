/*
 Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
 primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
 retornará o valor da aplicação sob o regime de juros compostos
*/

const jurosSimples = (capitalInicial, taxaJuros, tempo) => {
    return capitalInicial * (1 + taxaJuros * tempo);
}

const jurosComposto = (capitalInicial, taxaJuros, tempo) => {
    return capitalInicial * (1 + taxaJuros) ** tempo;
}

const res1 = jurosSimples(1000, 0.05, 3);
console.log(res1);

const res2 = jurosComposto(1000, 0.05, 3);
console.log(res2.toFixed(2));
