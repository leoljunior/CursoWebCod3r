//operador rest(juntar)/spread(espalhar)

//usar spread com objeto
const funcionarios = { nome: 'Maria', salario: 12345.45 }
const clone = { ativo: true, ...funcionarios } //pegando todos atributos de funcionarios e "espalhando" dentro do clone
console.log(clone)

//usar spread com Array
const grupoA = ['Claire', 'Jill', 'Ada Wong']
const grupoFinal = ['Nemesis', 'Hunter', ...grupoA]
console.log(grupoFinal)