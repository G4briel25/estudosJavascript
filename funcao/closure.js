const x = 'Global';

function fora() {
    const x = 'Local'
    function dentro() {
        return x;
    }

    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());

/*
    Acessou o local por conta que a função dentro() foi definida
    dentro do escopo fora()
*/