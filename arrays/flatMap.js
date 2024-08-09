const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}];

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

// O objetivo do flatMap é retornar dessa forma
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]));



// Criamos uma função chamada flatMap2 para fazer isso
Array.prototype.flatMap2 = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}
const notas2 = escola.flatMap2(getNotasDaTurma);
console.log(notas2);
