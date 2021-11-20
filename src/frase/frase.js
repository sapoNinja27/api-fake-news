const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    conteudo: String,
    avaliada: Boolean
})

const Frase = mongoose.model('Frase', schema)
module.exports = Frase