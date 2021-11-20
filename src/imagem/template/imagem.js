const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    conteudo: String,
    descricao: String,
    avaliada: Boolean
})
const Template = mongoose.model('Template', schema)
module.exports = Template