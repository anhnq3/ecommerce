const express = require('express')
const router = express()

const productsController = require('./productsController')

// Show products
router
.get('/products', productsController.All)

// Add products
.post('/products/addproducts', productsController.Addproducts)
.get('/products/addproducts', productsController.getAddproducts)

// Delete products
.delete('/products/deleteproducts/:id', productsController.Deleteproducts)

// Update products
// .get('/products/updateproducts/:id', productsController.getUpdateproducts)
.post('/products/updateproducts', productsController.Updateproducts)


module.exports = router