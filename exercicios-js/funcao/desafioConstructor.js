function Pessoa(nome) {
    //this.nome = nome Dessa forma o nome ficaria disponivel fora da função. p1.nome

    this.falar = () => console.log(`Meu nome é ${nome}, ${nome} Redfield`)
}

const p1 = new Pessoa('Claire')
p1.falar()