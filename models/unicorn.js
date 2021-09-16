const mongoose = require('mongoose')

const unicornSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    default: 0
  }
})

const Unicorn = mongoose.model('Unicorn', unicornSchema)

module.exports = Unicorn
