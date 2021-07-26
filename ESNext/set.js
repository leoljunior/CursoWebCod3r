//não aceita repetição e não é indexado

const personagens = new Set()
personagens.add('Ethan')
personagens.add('Mia').add('Heisenberg').add('Alcina').add('Donna')
personagens.add('Angie')
personagens.add('Mia')

console.log(personagens)

console.log(personagens.size)
console.log(personagens.has('angie'))
console.log(personagens.has('Angie'))
personagens.delete('Mia')
console.log(personagens.has('Mia'))


const nomes = ['Daniela', 'Cassandra', 'Alcina', 'Cassandra']
const nomesSet = new Set(nomes)
console.log(nomesSet)