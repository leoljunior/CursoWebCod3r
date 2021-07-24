//console.log(global)
//esse objeto setado no global, fica disponivel em todo sistema, porém é passível de alteração
//uma alternativa é usar o freeze
//ISSO NÃO É RECOMENDADO, PARA ISSO USAR SISTEMA DE MODULOS
globalThis.MinhaApp = Object.freeze ({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Meu App'
})