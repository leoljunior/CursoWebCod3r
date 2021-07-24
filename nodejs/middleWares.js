//middleware pattern ou chain of responsibility
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

//Linhas 16/17 short-circuit
//em JS os condicionais são executados parte a parte, a segunda verificação só é executada caso a primeira passe
//assim podemos utilizar uma função ao final das verificações assim ela só será executada caso as verificações passem
//usamos o && para função só ser executada em caso de true e usamos || para função ser executada em caso de false no condicional