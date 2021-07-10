function criarPessoa(nome) {
    return {
        falar: () => console.log(nome)
    }
}
const p1 = criarPessoa('Sarah Fortune')
p1.falar()