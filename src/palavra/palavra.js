const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    conteudo: String,
    avaliada: Boolean
})

const Palavra = mongoose.model('Palavra', schema)
module.exports = Palavra