const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use('/api', router)

mongoose.connect(
  'mongodb://localhost:27017/wgl',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

app.listen(port, () => {
  console.log(`Creatures are ready to go at http://localhost:${port}`)
})
