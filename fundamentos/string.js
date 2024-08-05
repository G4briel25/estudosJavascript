const nome = 'Gabriel';

console.log(nome.charAt(3)); // Mostra a posição do indice
console.log(nome.charCodeAt(4)); // Mostra o codigo decimal da tecla
console.log(nome.indexOf('e')); // Verifica se a variavel contem o elemento 'e', se sim retorna a posição do indice
console.log(nome.substring(1));
console.log(nome.substring(0, 6));
console.log('Aluno '.concat(nome).concat('!')); // Concatenar os elementos
console.log('Aluno ' + nome + '...');
console.log(nome.replace('a', '4')); // Substitui o caracter

console.log('Gabriel,Marcos,João,Carlos'.split(',')); // Fatie onde tiver a vírgula e torne um array

const n = num => num.toUpperCase();
console.log(`Ei ${n('aaaa')}`);