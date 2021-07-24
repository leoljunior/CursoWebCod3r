//Usando Modulos de terceiros

//npm - node packet manager - gerenciador de pacotes do node
//npm i lodash
//criar .gitignore - node_modules

const _ = require('lodash')
setInterval(() => console.log(_.random(5, 10)), 2000)
//valor random entre 1/1000 de 2 em 2 seg

//npm i -g nodemon
//nodemon usandoModuloTerceiro.js 
//executa no prompt e da um refresh qdo vc atualiza o codigo