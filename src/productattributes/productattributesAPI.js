const express = require('express')
const router = express()

const productattributesMiddleware = require('./productattributesMiddleware')
const productattributesController = require('./productattributesController')

// Show productattributes
router.get('/productattributes', productattributesMiddleware.all, productattributesController.All)

// Add productattributes
router.post('/productattributes/addproductattributes', productattributesMiddleware.addproductattributes, productattributesController.Addproductattributes)

// Delete productattributes
router.post('/productattributes/deleteproductattributes', productattributesMiddleware.deleteproductattributes, productattributesController.Deleteproductattributes)

// Update productattributes
router.post('/productattributes/updateproductattributes', productattributesMiddleware.updateproductattributes, productattributesController.Updateproductattributes)


module.exports = router