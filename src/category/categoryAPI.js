const express = require('express')
const router = express()

const categoryMiddleware = require('./categoryMiddleware')
const categoryController = require('./categoryController')

// Show category
router.get('/category', categoryMiddleware.all, categoryController.All)

// Add category
router.post('/category/addcategory', categoryMiddleware.addcategory, categoryController.Addcategory)

// Delete category
router.delete('/category/deletecategory', categoryMiddleware.deletecategory, categoryController.Deletecategory)

router.post('/category/updatecategory', categoryMiddleware.updatecategory, categoryController.Updatecategory)

module.exports = router