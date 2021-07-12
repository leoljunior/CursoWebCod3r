//Cadeia de protótipos (prototype chain)

Object.prototype.at0 = 'Sou o Object'
const avo = { at1: 'Sou o avô' }
const pai = { __proto__: avo, at2: 'Sou o pai', ae: 'Atributo ae pai' }
const filho = { __proto__: pai, at3: 'Sou o filho', ae: 'Atributo ae filho' }
console.log(filho.at1) //o filho não tem at1, porém o avô, sim
console.log(filho.at2)
console.log(filho.at0)
console.log(filho.at3)
console.log(filho.at15) // at15 não existe em nenhum, logo retorna undefined
console.log(filho.ae) //aqui retorna o ae do filho, pois é o primeiro que encontra na cadeia, ocorro um sombreamento(shadowing) do ae do pai
console.log(pai.ae)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40 - Spider',
    velMax: 340 //shadowing
}

const volvo = {
    modelo: 'V40 - Tracker',
    status() {     //Função tbm com nome status
        return `${this.modelo}: ${super.status()}` //o super chama o metodo status do seu pai
    }
}

Object.setPrototypeOf(ferrari, carro) //ferrari filho de carro
Object.setPrototypeOf(volvo, carro)   //Seta o prototype(pai) volvo filho de carro

console.log( ferrari)
console.log(volvo)

volvo.acelerar(180)
console.log(volvo.status())

ferrari.acelerar(338)
console.log(ferrari.status())