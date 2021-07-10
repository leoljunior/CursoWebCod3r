function Carro(velocidadeMax = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo público
    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }

    //metodo público
    this.getVelocidadeAtual = () => velocidadeAtual
}

const opala = new Carro
opala.acelerar()
opala.acelerar()
opala.acelerar()
opala.acelerar()
opala.acelerar()
console.log(opala.getVelocidadeAtual())

const dodgeChallanger = new Carro(350, 60)
dodgeChallanger.acelerar()
dodgeChallanger.acelerar()
dodgeChallanger.acelerar()
dodgeChallanger.acelerar()
console.log(dodgeChallanger.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof dodgeChallanger)