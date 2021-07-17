function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vinda', 1322)
const aula2 = new Aula('Volte sempre', 1654)
console.log(aula1, aula2)

//Simulando o new
function novo(f, ...params) {//o operação spread/hash recebe um conjunto de params e concatena eles em um array
    const obj = {} //criado novo obj com notação literal
    obj.__proto__ = f.prototype //associei o prototipo desse objeto ao atributo prototype da função 'f' recebida por parametro
    f.apply(obj, params)//executa a função 'f' passando o obj e os params
    return obj
}

const aula3 = novo(Aula, 'Bem vinda', 1322)
const aula4 = novo(Aula, 'Volte sempre', 1654)
console.log(aula3, aula4)