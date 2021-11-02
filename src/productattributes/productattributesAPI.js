const express = require('express')
const router = express()

const productattributesController = require('./productattributesController')

// Show productattributes
router.get('/productattributes', productattributesController.All)

// Add productattributes
router.post('/productattributes/addproductattributes', productattributesController.Addproductattributes)

// Delete productattributes
router.delete('/productattributes/deleteproductattributes', productattributesController.Deleteproductattributes)

// Update productattributes
router.post('/productattributes/updateproductattributes', productattributesController.Updateproductattributes)


module.exports = router