Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Xiao', 'Kaeya', 'Xinyan', 'Zong Li']

aprovados.forEach2(function(nome, indice) { //foreach tem 3 parametros, valor, indice, e o proprio array que esta percorrendo
    console.log(`${indice + 1}) ${nome}`)
})