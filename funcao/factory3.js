class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Gabriel');
p1.falar();


function Pessoa2(nome) {
    this.nome = nome;
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p2 = new Pessoa2('Marcos');
p2.falar();