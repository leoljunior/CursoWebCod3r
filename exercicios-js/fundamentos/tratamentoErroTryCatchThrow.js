function tratarErroELancar(erro) {
    //throw new Error('...........')
    //throw 10
    //throw true
    //throw false
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date
    }
}


function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final!!!')
    }
}

const obj = { nome: 'Robertinho' }
imprimirNomeGritado(obj)


//const obj = { name: 'Robertinho' }
//imprimirNomeGritado(obj)