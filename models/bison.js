const mongoose = require('mongoose')

const bisonSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    default: 0
  }
})

const Bison = mongoose.model('Bison', bisonSchema)

module.exports = Bison
