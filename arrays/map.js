const nums = [1,2,3,4,5];

let res = nums.map(e => e * 2);

console.log(res);

const somar10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;
res = nums.map(triplo).map(somar10).map(paraDinheiro);
console.log(res);
