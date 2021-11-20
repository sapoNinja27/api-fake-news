require('dotenv').config()
require("dotenv").config();
require('express-async-errors')
require('./src/database')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const routes = require('./src/route')
const cors = require('cors')
const errorHandler = require('./src/middlewares/errorHandler')

app.use(cors())
app.use(express.json())
app.use('/api', routes)
app.use(errorHandler)

app.listen(PORT, function(){
    console.log(`Servidor iniciado na porta ${PORT}...`)
})