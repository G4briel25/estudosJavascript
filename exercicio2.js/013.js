const filtrarNumero = (array) => {
    return array.filter(el => typeof el == 'number');
}

const res1 = filtrarNumero(['abc', 1])
const res2 = filtrarNumero([1, 2, 'gg'])
const res3 = filtrarNumero(['a', 'b', 'c'])
console.log(res1);
console.log(res2);
console.log(res3);
