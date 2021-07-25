const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 19 * * 0', () => {  // */5 - executa de 5 em 5 seg, * - qlqr minuto, 19h, * - qlqr dia mês, * - qlqr mês, 2 - terça feira
    console.log('Executando Tarefa 1', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1') //cancela tarefa 1 após 20s de execução
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 5)] //dia 1 segunda até dia 5 sexta
regra.hour = 19
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2',  new Date().getSeconds())
})