const lista = [];

for(var i = 0; i < 10; i++) {
    lista.push(function() {
        console.log(i);
    });    
}

lista[0]();
lista[4]();

console.log('================================');


const lista2 = [];

for(let i = 0; i < 10; i++) {
    lista2.push(function() {
        console.log(i);
    });    
}

lista2[2]();
lista2[8]();