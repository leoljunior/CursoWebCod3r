const pai = { nome: 'Pedro', corCabelo: 'preto', corOlhos: 'Azuis'}

const filha1 = Object.create(pai) //aqui é criado o obj filha1 já setando pai como prototype
filha1.nome = 'Claire Redfield'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Jill Valentine', writable: false, enumerable: true},
    tamanhoCabelo: { value: 'curto', enumerable: true }
})
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo} e ${filha2.tamanhoCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`) //hasOwnProperty testa se a propriedade é do objeto ou do pai
}