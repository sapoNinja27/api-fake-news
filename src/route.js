const express = require('express')
const router = express.Router()
const palavra = require('./palavra/route')
const frase = require('./frase/route')
const imagem = require('./imagem/route')
router.use('/palavra', palavra)
router.use('/frase', frase)
router.use('/imagem', imagem)
module.exports = router