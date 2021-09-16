const express = require('express')
const bisonRouter = require('./bison')
const unicornsRouter = require('./unicorns')

const router = express.Router()

router.use('/bison', bisonRouter)
router.use('/unicorns', unicornsRouter)

module.exports = router
