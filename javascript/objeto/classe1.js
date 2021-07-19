class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {  //quando a classe é instanciada com new, é chamado o constructor
        this.nome = nome
        this.valor = valor
    } 
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -350)

const contas = new CicloFinanceiro(6, 2019)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas)
console.log(contas.sumario())
