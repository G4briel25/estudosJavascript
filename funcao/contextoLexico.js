const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec();

/*
    Acessou o Global por que a função minhaFuncao() foi definida
    fora do escopo da função exec(), então acabou pegando a variavel
    Global
*/