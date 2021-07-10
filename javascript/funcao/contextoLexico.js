const valor = 'Global'

function minhaFuncao() { //a função tem a "conciência" de onde foi declarada, logo a variável valor que ela vai encontrar é a mais próxima  a ela
    console.log(valor)
}
minhaFuncao()

const exec = () => {
    const valor = 'Local'
    minhaFuncao()
}
exec()