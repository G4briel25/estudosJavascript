/*
 Escreva uma função que receba um valor booleano ou numérico. 
 Se o parâmetro fornecido for booleano, o retorno da função deverá 
 ser o inverso. Por exemplo, se a entrada for false, retornará true. 
 Se o parâmetro for numérico, o retorno será o número inverso. 
 Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro de 
 entrada não for de nenhum dos tipo acima, retorne "booleano ou 
 número esperados, mas o parâmetro é do tipo ...".
*/

const inverso = (parametro) => {
    
    if(typeof parametro === 'boolean') {
        
        console.log(!parametro);

    } else if(typeof parametro === 'number') {
        
        console.log(-parametro);

    } else {
        console.log("Booleano ou número esperado, mas o parâmetro é do tipo", typeof parametro);
    }
    
}

inverso(true);
inverso(false);
inverso(23);
inverso(-8)
inverso('Texto');
