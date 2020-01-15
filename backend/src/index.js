const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routs')

const app = express()

mongoose.connect('mongodb+srv://Yeah:Yeah@cluster0-ekqnw.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

//Métodos HTTP: GET, POST, PUT, DELETE

//Query Params: request.query (Filtros, Ordenação, paginação...)
//Route Params: request.params(Identificar um recurso na remoção ou alteração)
//Body: request.body (Dados para criação ou alteração para um registro.)

//MongoDB (Não-relacional)



app.listen(3333);