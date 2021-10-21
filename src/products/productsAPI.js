const express = require('express')
const router = express()

const productsMiddleware = require('./productsMiddleware')
const productsController = require('./productsController')

// Show products
router.get('/products', productsMiddleware.all, productsController.All)

// Add products
router.post('/products/addproducts', productsMiddleware.addproducts, productsController.Addproducts)
router.get('/products/addproducts', productsController.getAddproducts)

// Delete products
router.delete('/products/deleteproducts/:id', productsMiddleware.deleteproducts, productsController.Deleteproducts)

// Update products
router.get('/products/updateproducts/:id', productsMiddleware.getupdateproduct, productsController.getUpdateproducts)
router.post('/products/updateproducts', productsMiddleware.updateproducts, productsController.Updateproducts)


module.exports = router