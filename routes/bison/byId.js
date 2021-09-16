const express = require('express')
const { Bison } = require('../../models')

const router = express.Router({ mergeParams: true })

router.route('/')
  .get(async (req, res) => {
    // Get a bison by id
    const { bisonId } = req.params
    const bison = await Bison.find({ _id: bisonId })

    if (!bison) {
      return res.status(404).send(`No such bison: ${bisonId}`)
    }
    res.json(bison)
  })
  .put(async (req, res) => {
    // Update a bison by id
    const { bisonId } = req.params
    await Bison.updateOne(
      { _id: bisonId },
      {
        name: req.body.name,
        age: req.body.age
      }
    )
    const updatedBison = {
      _id: bisonId,
      name: req.body.name,
      age: req.body.age
    }
    res.json(updatedBison)
  })
  .delete(async (req, res) => {
    // Delete a bison by id
    const { bisonId } = req.params
    await Bison.deleteOne({ _id: bisonId })
    res.send(`Bison ${bisonId} successfully deleted.`)
  })

module.exports = router
