class Person {
    constructor(_nome, _idade) {
        this.nome = _nome,
        this.idade = _idade
    }
}

const p1 = new Person('Fulano', 21)
console.log(p1);



class Avo {
    constructor(_sobreNome) {
        this.sobreNome = _sobreNome;
    }
}

class Pai extends Avo {
    constructor(sobreNome, _profissao = 'Professor') {
        super(sobreNome)
        this.profissao = _profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho()
console.log(filho);
