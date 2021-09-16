const express = require('express')
const { Unicorn } = require('../../models')

const router = express.Router()

router.route('/')
  .get(async (req, res) => {
    // Get all unicorns
    const unicorns = await Unicorn.find()
    res.json(unicorns)
  })
  .post(async (req, res) => {
    // Create a new unicorn
    /*
      {
        name: "Newnicorn"
      }
    */
    const { name } = req.body
    if (!name) {
      // the "name" parameter is required
      return res.status(400).send('Invalid request')
    }

    const newUnicorn = new Unicorn({ name })
    newUnicorn.save()
    res.status(201).json(newUnicorn)
  })

module.exports = router
