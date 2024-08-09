const receberPrimeiroEUltimoElemento = (array) => {
    
    if(array.length === 0) {
        return []
    } 
    if(array.length === 1) {
        return [array[0], array[0]];
    }

    return [array[0], array[array.length -1]];
    
}

const res1 = receberPrimeiroEUltimoElemento([7,14, 'olá']);
const res2 = receberPrimeiroEUltimoElemento([-100, 'aplicativo', 16]);
const res3 = receberPrimeiroEUltimoElemento([1]);
const res4 = receberPrimeiroEUltimoElemento([]);
console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
