const sequencia = {
    _valor: 1, // Convenção
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor);


console.log('*************************************');

let Pessoa1 = {
    nome: "Gabrie",
    idade: 20,
    naturalizacao: "Bolivia",

    get natureza() {
        return this.naturalizacao
    }
}

console.log(Pessoa1.naturalizacao);

console.log('--------------------------------------------------');


let Pessoa2 = {
    nome: "Gabrie",
    idade: 20,
    naturalizacao: "",

    set natureza(pais) {
        this.naturalizacao = pais;
    }
}

Pessoa2.naturalizacao = "Brasil"

console.log(Pessoa2.naturalizacao);
