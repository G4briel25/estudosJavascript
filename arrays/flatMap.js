const lista = [1,2,1];
const res = lista.flatMap(num => (num === 2 ? [2,2] : 1));

console.log(res);

console.log('-------------------------');

const arrays = [[1, 2], [3, 4], [5, 6]];

// Usando flatMap para dobrar os valores e achatar o array
const result = arrays.flatMap(arr => arr.map(x => x * 2));

console.log(result); // [2, 4, 6, 8, 10, 12]
