/*
 Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
 registro de todos as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
 mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
 vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
 jogo. (Número do pior jogo).

    Obs.: O primeiro jogo não conta como novo recorde do melhor.
    Exemplo:
    String: “10 20 20 8 25 3 0 30 1”
    Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
    aconteceu no sétimo jogo.)
*/

const analizaPontuacao = (pontuacoes) => {
    // fatiar a lista de string
    const listaNumero = pontuacoes.split(' ').map(num => parseInt(num));

    if(listaNumero == 0) {
        return [0, 0];
    }

    let maiorPontuacao = listaNumero[0];
    let piorPontuacao = listaNumero[0];
    let recordesBatidos  = 0;
    let numeroPiorJogo  = 1;

    for(let i = 1; i < listaNumero.length; i++) {
        if(listaNumero[i] > maiorPontuacao) {
            maiorPontuacao = listaNumero[i];
            recordesBatidos++;
        } else if(listaNumero[i] < piorPontuacao) {
            piorPontuacao = listaNumero[i];
            numeroPiorJogo = i + 1;
        }

    }
    return [recordesBatidos, numeroPiorJogo];
}

const resultado = analizaPontuacao("10 20 20 8 25 3 0 30 1");

console.log(resultado);
