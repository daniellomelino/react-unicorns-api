const express = require('express')
const { Unicorn } = require('../../models')

const router = express.Router({ mergeParams: true })

router.route('/')
  .get(async (req, res) => {
    // Get a unicorn by id
    const { unicornId } = req.params
    const unicorn = await Unicorn.find({ _id: unicornId })
    if (!unicorn) {
      return res.status(404).send(`No such unicorn: ${unicornId}`)
    }
    res.json(unicorn)
  })
  .put(async (req, res) => {
    // Update a unicorn by id
    const { unicornId } = req.params
    await Unicorn.updateOne(
      { _id: unicornId },
      {
        name: req.body.name,
        age: req.body.age
      }
    )
    const updatedUnicorn = {
      _id: unicornId,
      name: req.body.name,
      age: req.body.age
    }
    res.json(updatedUnicorn)
  })
  .delete(async (req, res) => {
    // Delete a unicorn by id
    const { unicornId } = req.params
    await Unicorn.deleteOne({ _id: unicornId })
    res.send(`Unicorn ${unicornId} successfully deleted.`)
  })

module.exports = router
