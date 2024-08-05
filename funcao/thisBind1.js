const pessoa = {
    suadacao: 'Bom dia!',
    falar() {
        console.log(this.suadacao);        
    }
}

pessoa.falar();
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();