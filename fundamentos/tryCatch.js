function tratarErro(error) {
    throw new Error("***************************** Houve um erro *********************************");
}

function imprimir(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!');
    } catch (e) {
        tratarErro(e);
    } finally {
        console.log("Final...");        
    }
}

//const nome = {name: 'Gabriel'};
const nome = {nome: 'Gabriel'};
imprimir(nome);