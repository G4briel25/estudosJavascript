const [a] = [10];
console.log(a);

const [n1, , n2, n3, n4 = null] = [1, 2, 3];
console.log(n1, n2, n3, n4);

console.log('==============================');

const [, [, numero]] = [[1,2,3], [4,5,6]];
console.log(numero);
