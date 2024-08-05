function Objeto(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Exec...');
        
    }
}

const objeto2 = new Objeto('Teste1');

console.log(objeto2.nome);
objeto2.exec()
