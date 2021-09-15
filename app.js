const express = require('express')
const cors = require('cors')
const uuidv4 = require('uuid/v4')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

/*
Unicorns
  - Get all unicorns
    - GET /unicorns
  - Get a specific unicorn
    - GET /unicorns/:unicornId
  - Create a new unicorn
    - POST /unicorns
  - Delete an existing unicorn
    - DELETE /unicorns/:unicornId
*/

// Mock data
let unicorns = [
  { _id: uuidv4(), name: "Jeff", age: 1 },
  { _id: uuidv4(), name: "Rainbow", age: 6 },
  { _id: uuidv4(), name: "Spike", age: 11 },
  { _id: uuidv4(), name: "Sprinkles", age: 100 }
]

app.get('/unicorns', (req, res) => {
  res.json(unicorns)
})

app.get('/unicorns/:unicornId', (req, res) => {
  const { unicornId } = req.params
  const unicorn = unicorns.find(u => u._id === unicornId)

  if (!unicorn) {
    return res.status(404).send(`No such unicorn: ${unicornId}`)
  }
  res.json(unicorn)
})

app.post('/unicorns', (req, res) => {
  /*
    {
      name: "Newnicorn"
    }
  */
  const { age, name } = req.body
  if (!name) {
    // the "name" parameter is required
    return res.status(400).send('Invalid request')
  }

  const newUnicorn = {
    _id: uuidv4(),
    name,
    age: age || 0
  }
  unicorns.push(newUnicorn)
  res.status(201).json(newUnicorn)
})

app.put('/unicorns/:unicornId', (req, res) => {
  const { unicornId } = req.params
  const unicorn = unicorns.find(u => u._id === unicornId)
  if (!unicorn) {
    return res.status(404).send(`No such unicorn: ${unicornId}`)
  }

  const updatedUnicorn = req.body

  unicorns = unicorns.map(u => {
    if (u._id === unicornId) {
      return updatedUnicorn
    }
    return u
  })

  res.json(updatedUnicorn)
})

app.delete('/unicorns/:unicornId', (req, res) => {
  const { unicornId } = req.params
  unicorns = unicorns.filter(u => u._id !== unicornId)
  res.send(`Unicorn ${unicornId} successfully deleted.`)
})

app.listen(port, () => {
  console.log(`Unicorns ready to go at http://localhost:${port}`)
})
