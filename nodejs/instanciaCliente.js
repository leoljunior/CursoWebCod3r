const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//Neste caso tenho que ter o () ao final pra invocar a função factory que é retornada pela instanciaNova
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()


//incrementando o contadorA
contadorA.inc()
contadorA.inc()
console.log(`A: ${contadorA.valor} B: ${contadorB.valor}`) //aqui vemos que apesar de incrementar o contadorA o contadorB tbm foi afetado


//incrementando o contadorC
contadorC.inc()
contadorC.inc()
console.log(`C: ${contadorC.valor} D: ${contadorD.valor}`)//aqui vemos que msm alterando o contadorC, o contadorD não foi alterado por ter sido invocado através de uma factory

contadorD.inc()
contadorD.inc()
contadorD.inc()
contadorD.inc()
contadorD.inc()
console.log(`C: ${contadorC.valor} D: ${contadorD.valor}`)
