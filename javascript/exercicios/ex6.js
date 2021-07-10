/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos*/

function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    let x = capitalInicial
    let result = capitalInicial += capitalInicial * taxaJuros * tempoAplicacao
    return console.log(`Juros Simples: o montante da aplicação inicial de: ${x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})} no período de: ${tempoAplicacao} meses, à ${taxaJuros}% a/m é: ${result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`)
}

jurosSimples(8756.56, 0.0728, 8)

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    let x = capitalInicial
    for (let i = 0; i < tempoAplicacao; i++) {
        capitalInicial +=  capitalInicial * taxaJuros
    }


    return console.log(`Juros Compostos: o montante da aplicação inicial de: ${x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})} no período de: ${tempoAplicacao} meses, à ${taxaJuros}% a/m é: ${capitalInicial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}`)
}
jurosCompostos(16985.23, 0.0354, 15)