const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    conteudo: String,
    descricao: String,
    avaliada: Boolean
})
const Noticia = mongoose.model('Noticia', schema)
module.exports = Noticia