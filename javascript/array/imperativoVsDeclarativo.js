const alunos = [
    { nome: 'Ayaka', nota: 9.99 },
    { nome: 'Diona', nota: 6.58 }
]

//IMPERATIVO
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)


//DECLARATIVO
const getNota = aluno => aluno.nota               //por ter funções separadas o codigo permite um maior reúso
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)