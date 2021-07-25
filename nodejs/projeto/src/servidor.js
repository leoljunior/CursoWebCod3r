const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDados = require('./bancoDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDados.getProduto(req.params.id))//será convertido pra json
})

app.get('/produtos', (req, res, next) => {
    res.send(bancoDados.getProdutos())
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //json
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.salvarProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //json
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDados.excluirProduto(req.params.id)
    res.send(produto) //json
})

app.listen(port, () => {
    console.log(`Servidor executando na porta: ${port}`)
})