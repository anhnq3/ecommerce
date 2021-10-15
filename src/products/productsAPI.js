const express = require('express')
const router = express()

const productsMiddleware = require('./productsMiddleware')
const productsController = require('./productsController')

// Show products
router.get('/products', productsMiddleware.all, productsController.All)

// Add products
router.post('/products/addproducts', productsMiddleware.addproducts, productsController.Addproducts)

// Delete products
router.post('/products/deleteproducts', productsMiddleware.deleteproducts, productsController.Deleteproducts)

// Update products
router.post('/products/updateproducts', productsMiddleware.updateproducts, productsController.Updateproducts)


module.exports = router