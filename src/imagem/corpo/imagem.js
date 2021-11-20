const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    conteudo: String,
    descricao: String,
    avaliada: Boolean
})
const Imagem = mongoose.model('Corpo', schema)
module.exports = Imagem