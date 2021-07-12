const sequencia = {
    _valor: 1, //o _ significa uma convenção e quer dizer que _valor é "privado" dentro do objeto e só deve ser acesso pelos getters and setters
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }else{
            console.log('Valor informado é menor que valor atual.')
        }
    }
}

console.log(sequencia.valor, sequencia.valor) //não foi chamado o objeto e sim o "atributo" porem internamente ele entende que estou chamando o get
sequencia.valor = 1000 //e nesse caso o set
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 800
console.log(sequencia.valor, sequencia.valor)
