const port = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Smartphone', brand: 'Apple', price: 7999.89 })//será convertido pra json
})

app.listen(port, () => {
    console.log(`Servidor executando na porta: ${port}`)
})