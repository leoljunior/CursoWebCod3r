const characters = ['Xiao', 'Diona', 'Klee', 'Bennett']
console.log(characters)
characters.pop() //retira a última posição
console.log(characters)

characters.push('Sucrose') //adciona na próxima posição
console.log(characters)

characters.shift() //retira a primeira posição
console.log(characters)

characters.unshift('Diluc') //adciona no início
console.log(characters)

//Splice pode add ou remove elementos ou ambos

//add
characters.splice(2, 0, 'Lisa', 'Amber')
console.log(characters)

//remove
characters.splice(3, 1) //a partir da posição 3 vai remover 1 elemento, no caso a Amber
console.log(characters)


const someCharactersA = characters.slice(2) //retorna um novo array, com elementos a partir da posição 2, a posição 2 inclusive
console.log(someCharactersA)

const someCharactersB = characters.slice(1, 4) //retorna um novo array a partir do 1 até o 4, porém o 4 não entra
console.log(someCharactersB)