const characters = [
    { nome: 'Jill Valentine', nota: 7.89 },
    { nome: 'Ada Wong', nota: 10.00 },
    { nome: 'Albet Wesker', nota: 8.99 },
    { nome: 'Claire Redfield', nota: 7.35 },
    { nome: 'Chris Redfield', nota: 8.78 },
    { nome: 'Leon S. Kennedy', nota: 9.56 },
    { nome: 'Jake Muller', nota: 5.56 },
    { nome: 'Ethan Winters', nota: 8.78 },
    { nome: 'William Birkin', nota: 9.89 },
    { nome: 'Sherry Birkin', nota: 4.35 },
    { nome: 'Annette Birkin', nota: 4.48 },
    { nome: 'Mia Winters', nota: 6.45 }
]

console.log(characters.map(a => a.nota))

const result = characters.map(a => a.nota).reduce(function(acumulador, atual){ //O reduce basicamente acumula os valores das posições do array retorna um valor ao final
    console.log(acumulador.toFixed(2), atual)
    return acumulador + atual
}, 0).toFixed(2)  // se quiser pode ser passado aqui o valor inicial, no caso o 0
console.log(result)