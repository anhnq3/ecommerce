const express = require('express')
const router = express()

const categoryController = require('./categoryController')

// Show category
router.get('/category', categoryController.All)

// Add category
router.post('/category/addcategory', categoryController.Addcategory)

// Delete category
router.delete('/category/deletecategory', categoryController.Deletecategory)

router.post('/category/updatecategory', categoryController.Updatecategory)

module.exports = router