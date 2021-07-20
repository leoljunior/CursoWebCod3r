const characters = [
    { nome: 'Jill Valentine', nota: 7.89, jogavel: true },
    { nome: 'Ada Wong', nota: 10.00, jogavel: true },
    //{ nome: 'Albet Wesker', nota: 8.99, jogavel: false },
    { nome: 'Claire Redfield', nota: 7.35, jogavel: true },
    { nome: 'Chris Redfield', nota: 8.78, jogavel: true },
    { nome: 'Leon S. Kennedy', nota: 9.56, jogavel: true },
    //{ nome: 'Jake Muller', nota: 5.56, jogavel: false },
    { nome: 'Ethan Winters', nota: 8.78, jogavel: true },
    //{ nome: 'William Birkin', nota: 9.89, jogavel: false },
    { nome: 'Sherry Birkin', nota: 4.35, jogavel: true },
    //{ nome: 'Annette Birkin', nota: 4.48, jogavel: false },
    //{ nome: 'Mia Winters', nota: 6.45, jogavel: false }
]

//Desafio 1: usando reduce, todos são jogavéis??
const res1 = (resultado, jogavel) => resultado && jogavel
console.log(characters.map(a => a.jogavel).reduce(res1))

//Desafio 2: usando reduce, algum é jogavél?
const res2 = (resultado, jogavel) => resultado || jogavel
console.log(characters.map(a => a.jogavel).reduce(res2))