const pessoa = {
    nome: 'Claire',
    idade: 23,
    peso: 69
}

console.log(Object.keys(pessoa)) //Lê as chaves do objeto
console.log(Object.values(pessoa)) //Lê os valores do objeto
console.log(Object.entries(pessoa)) //retorna um array maior com os arrays dentro com os indices de chave: valor

Object.entries(pessoa).forEach(([chave, valor]) => { //percorrendo o array e usando de destructuring para pegar valor da chave
    console.log(`${chave}: ${valor}`) 
})

Object.defineProperty(pessoa, 'dataNasc', { //define uma nova propriedade para o objeto
    enumerable: true, //permite que o objeto seja listado
    writable: false,
    value: '22/01/1984'
})

pessoa.dataNasc = '22/12/1912'
console.log(pessoa.dataNasc) //não é possivel alterar o valor, pois o writable é false
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 10 }
const o1 = { b: 2 }
const o2 = { c: 3 }   //Assign faz uma concatenação com o objeto de destino(primeiro parametro), com os objetos passados depois
const o3 = { d: 4 }   //Atributos que ja existem tem o valor sobrescrito
const o4 = { e: 5 }
const o5 = { f: 6, a: 1 }
const obj = Object.assign(dest, o1, o2, o3, o4, o5)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
