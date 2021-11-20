const express = require('express')
const router = express.Router()
const frase = require('./frase-controller')
router.get('/find', frase.get)
router.post('/save', frase.save)
router.put('/update/:id', frase.update)
router.delete('/delete/:id', frase.delete)
router.get('/findAll', frase.getAll)
module.exports = router