function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__) //true pois apontam para o msm objeto, qdo criados a partir de uma msm função construtora
console.log(MeuObjeto.prototype === obj1.__proto__) //true pois aponta pro atributo prototype da função

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Olá, meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Raphaella'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)