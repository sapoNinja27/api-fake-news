const express = require('express')
const router = express.Router()
const corpo = require('./corpo/route')
const final = require('./final/route')
const template = require('./template/route')
router.use('/corpo', corpo)
router.use('/final', final)
router.use('/template', template)
module.exports = router