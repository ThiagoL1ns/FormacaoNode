const express = require('express')
const mysql = require('mysql2')
const connect = require('./conexao.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/clientes/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into cliente (nome) value('" + req.body.nome + "')", res);
})

app.put('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update cliente set nome='" + req.body.nome + "' where id=" + req.params.id, res);
})

app.delete('/clientes/:id', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from cliente where id=" + req.params.id, res);
})

app.get('/', (req, res) => {
    res.send('Executando uma aplicação node')
    res.end()
})

app.get('/clientes', (req, res) => {
    res.setHeader('Acess-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return connect.execSQLQuery('select * from cliente', res)
})

app.get('/retorno', (req, res) => {
    res.send('Criando outra rota')
    res.end()
})

app.get('/clientes/:id', (req, res) => {
    res.setHeader('Acess-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return connect.execSQLQuery('select * from cliente where id=' + req.params.id, res)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))