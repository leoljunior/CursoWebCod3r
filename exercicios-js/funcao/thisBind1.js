const pessoa = {
    saudacao: 'Olá!!!!!!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar //conflito entre paradigmas: funcional e OO
falar()     //neste caso o this para de apontar para o objeto pessoa e no caso retorna o undefined

const falarDePessoa = pessoa.falar.bind(pessoa) //a função bind() "amarra" o this ao objeto referenciado, no caso pessoa, logo o this sempre apontará para pessoa
falarDePessoa() 