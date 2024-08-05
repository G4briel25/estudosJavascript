let valores = [5.1, 1.4, 8.0, 3.8, 6.8];
console.log(valores[0]);
console.log(valores[5]);

console.log(valores.push('texto'));
console.log(valores);

console.log(valores.unshift('fa'));
console.log(valores);

console.log(valores.length);
console.log(valores.pop());
console.log(valores);

delete valores[0];
delete valores[5];
console.log(valores);