const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.post('/', productController.createProduct)
router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.delete('/:id', productController.deleteProduct)

console.log("Product Route -> Working Good")
module.exports = router;