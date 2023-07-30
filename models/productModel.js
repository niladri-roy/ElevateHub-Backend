// Create a file named "models/Product.js"
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Product must have a name'],
  },
  price: {
    type: Number,
    required: [true, 999],
  },
  description:{
    type: String,
    required: [true, 'A Product must have a description'],
  }
})

console.log("Product Model -> Working Good");
module.exports = mongoose.model('Product', productSchema);