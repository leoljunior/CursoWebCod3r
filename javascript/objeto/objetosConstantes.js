// pessoa -> endMemoria01 -> {...} Constante pessoa aponta pra um endereço na memoria, que por sua vez armazena o objeto 
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'       //Isso é possivel não só esta sendo alterado o valor do atributo do objeto que a const aponta, e não a const em si
console.log(pessoa)

//pessoa -> endMemoria02 -> {...} 
//pessoa = { nome: 'Ana' } Isso gera um erro pois não é possivel atribuir outro objeto a uma constante

Object.freeze(pessoa) //O freeze congela o objeto e não é mais possível alterar qualquer coisa no objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
console.log(pessoaConstante)