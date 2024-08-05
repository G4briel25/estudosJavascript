const fabricante = ["Mercedes", "Fiat", "Honda", "Ferrari"];

function modelos(nome, indice) {
    return console.log(`${indice+1}. ${nome}`);
}

fabricante.forEach(modelos);



const notas = [4.5, 7.2, 5.8, 8.0, 9.6, 1.2, 6.9, 7.0];

const notasAbaixaDe7 = notas.filter(nota => nota < 7);
console.log(notasAbaixaDe7);



const notasAbaixode6 = nota => nota < 6;
const imprimirNotas = notas.filter(notasAbaixode6);
console.log(imprimirNotas);
