function Aula (_nome, _videoID) {
    this.nome = _nome;
    this.videoID = _videoID;    
}

const aula1 = new Aula('Fulano', 105);
const aula2 = new Aula('Cicrano', 21);

console.log(aula1, aula2);