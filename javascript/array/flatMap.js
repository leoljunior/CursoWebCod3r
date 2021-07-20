const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.16
    }, {
        nome: 'Anne',
        nota: 9.9
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebecca',
        nota: 7.89
    }, {
        nome: 'Roberto',
        nota: 7.8
    }]
}]

const getNotaDoAluno = a => a.nota
const getNotasDaTurma = t => t.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

const notas2 = escola.flatMap(getNotasDaTurma) //flatMap faz um Map, porém tirando da matriz
console.log(notas2)
