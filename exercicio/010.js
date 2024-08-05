/*
 Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
 ou false.
*/

const verificaNumero = (num) => {
    if(num % 3 == 0) {
        return true;
    } else {
        return false;
    }
}

const res = verificaNumero(134);
console.log(res);
