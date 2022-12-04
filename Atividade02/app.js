const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('Executando uma aplicação node')
    res.end()
})

app.get('/retorno', (req, res) =>{
    res.send('Criando outra rota')
    res.end()
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))