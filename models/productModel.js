// Create a file named "models/Product.js"
const mongoose = require('mongoose');

/*
make product schema for this properties
name
description
price
ratings
images [array]
category [array]
brand
stock
numOfReviews
reviews [array] {user,name, rating, comment}
createdAt
LastUpdatedAt
productID
otherDetails [array] {key, value}
*/

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product Name is required'],
    trim: true,
    maxLength: [100, 'Product Name cannot exceed 100 characters'],
    default: 'Product Name',
  },
  description: {
    type: String,
    required: [true, 'Product Description is required'],
    trim: true,
    maxLength: [1000, 'Product Description cannot exceed 1000 characters'],
    default: 'Product Description',
  },
  price:{
    type: Number,
    required: [true, 'Product Price is required'],
    maxLength: [8, 'Product Price cannot exceed 5 characters'],
    default: 0,
  },
  ratings:{
    type: Number,
    default: 0,
  },
  images:[
    {
      public_id:{
        type: String,
        required: [true, 'Product Image is required'],
        default: 'Product Image',
      },
      url:{
        type: String,
        required: [true, 'Product Image is required'],
        default: 'Product Image',
      }
    }
  ],
  category:[
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'Please Select Product Category'],
      default: 'Product Category',
    }
  ],
  seller:{
    type: String,
    required: [true, 'Product Seller is required'],
    default: 'Product Seller',
  },
  stock:{
    type: Number,
    required: [true,  'Product Stock is required'],
    maxLength: [5, 'Product Stock cannot exceed 5 characters'],
    default: 0,
  },
  numOfReviews:{
    type: Number,
    default: 0,
  },
  reviews:[
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      user:{
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
      }
    }
  ],
  createdAt:{
    type: Date,
    default: Date.now,
  },
  updatedAt:{
    type: Date,
    default: Date.now,
  },
  otherDetails:[
    {
      key:{
        type: String,
      },
      value:{
        type: String,
      }
    }
  ],
});

console.log("Product Model -> Working Good");
module.exports = mongoose.model('Product', productSchema);