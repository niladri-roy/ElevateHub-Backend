const Product = require('../models/productModel');

// Create a new Product
const createProduct = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newProduct,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

// Get all Products
const getAllProducts = async (req, res, next) => {
  try {
    const Products = await Product.find({});
    res.status(200).json(Products);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

// Get a Single Product by its ID
const getProductById = async (req, res, next) => {
  try {
    const Product = await Product.findById(req.params.id);
    if (!Product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }
    res.status(200).json(Product);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

// Update a Product by ID

// Delete a Product by ID
const deleteProduct = async (req, res, next) => {
  // try {
  //   const Product = await Product.findByIdAndDelete(req.params.id);
  //   if (!Product) {
  //     return res.status(404).json({
  //       error: "Product not found",
  //     });
  //   }
  //   res.status(200).json({
  //     status: 'success',
  //     message: 'Product Deleted',
  //   });
  // } catch (error) {
  //   res.status(400).json({
  //     status: 'fail',
  //     message: error,
  //   });
  // }

  const product = await Product.findByIdAndDelete(req.params.id);
  if(!product){
    return res.status(404).json({
      error: "Product not found",
    });
  }

  // await product.delete()

  res.status(200).json({
    success: true,
    message: 'Product Deleted',
  })
};

console.log("Product Controller -> Working Good");

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
};
