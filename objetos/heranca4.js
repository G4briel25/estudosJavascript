console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

console.log('Gabriel Jaune Ribera'.reverse());

Array.prototype.primeiroHehe = function() {
    return this[0];
}

console.log(["Cachorro", "chão", "Numsei"].primeiroHehe());