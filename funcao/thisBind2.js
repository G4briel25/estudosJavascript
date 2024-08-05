function Pessoa() {
    this.idade = 0;
    setInterval(function() {
        this.idade++ /* Não está herdando ao obj Pessoa */
        console.log(this.idade);
    }, 1000);
}

//new Pessoa;


function Pessoa() {
    this.idade = 0;
    setInterval(function() {
        this.idade++
        console.log(this.idade);
    }.bind(this), 1000); /* Ao utilizar o bind, esta especificando ao this do escopo de Pessoa */
}

//new Pessoa;


function Pessoa() {
    this.idade = 0;

    const self = this /* Armazenar o this em uma variavel faz com q funcione, ja q vc ta invocando ele em qualquer escopo */
    setInterval(function() {  
        self.idade++
        console.log(self.idade);
    }, 1000);
}

//new Pessoa;


// O mais recomendado hj em dia seria em usar o Arrow Function () => {}

/* 
    As arrow functions são um bom exemplo de como o contexto léxico funciona em JavaScript. 
    Elas não criam seu próprio escopo de this, mas herdam this do contexto onde foram definidas. 
    Isso significa que o valor de this dentro de uma arrow function será o mesmo que o this fora dela no momento de sua criação.
*/ 
function Pessoa() {
    this.idade = 0;
    setInterval(() => {     
        this.idade++
        console.log(this.idade);
    }, 1000);
}

new Pessoa;