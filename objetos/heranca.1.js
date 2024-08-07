// Cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = 0;

const avo = { atributo1: 'A' };
const pai = { __proto__: avo, atributo2: 'B' };
const filho = { __proto__: pai, atributo3: 'C' };

console.log(filho.atributo0, filho.atributo1, filho.atributo2, filho.atributo3);

const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMaxima;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMaxima: 324 // Sombrear o obj acima / subreEscrever
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(320);
console.log(ferrari.status());
