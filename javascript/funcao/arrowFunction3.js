let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //retorna true, neste caso o this aponta para o objeto global do node

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //neste caso retorna false, pois o this agora aponta para o obj, por causa do bind
comparaComThis(obj) //true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //retorna false pois dentro da arrow o this não altera o local que aponta.
comparaComThisArrow(module.exports) //retorna true, this dentro da arrow aponta pro modulo atual

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //retorna false pois dentro do arrow nem o bind consegue alterar o apontamento do this
