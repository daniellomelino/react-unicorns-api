const express = require('express')
const all = require('./all')
const byId = require('./byId')

const router = express.Router()

router.use('/', all)
router.use('/:unicornId', byId)

module.exports = router