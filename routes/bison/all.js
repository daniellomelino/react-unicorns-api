const express = require('express')
const { Bison } = require('../../models')

const router = express.Router()

router.route('/')
  .get(async (req, res) => {
    // Get all bison
    const bison = await Bison.find()
    res.json(bison)
  })
  .post((req, res) => {
    // Create a new bison
    /*
      {
        name: "Tyson"
      }
    */
    const { name } = req.body
    if (!name) {
      // the "name" parameter is required
      return res.status(400).send('Invalid request')
    }

    const newBison = new Bison({ name })
    newBison.save()
    res.status(201).json(newBison)
  })

module.exports = router
