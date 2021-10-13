const express = require('express')
const router = express()

const flashsaleMiddleware = require('./flashsaleMiddleware')
const flashsaleController = require('./flashsaleController')

// Show flashsale
router.get('/flashsale', flashsaleMiddleware.all, flashsaleController.All)

// Add flashsale
router.post('/flashsale/addflashsale', flashsaleMiddleware.addflashsale, flashsaleController.Addflashsale)

// Delete flashsale
router.post('/flashsale/deleteflashsale', flashsaleMiddleware.deleteflashsale, flashsaleController.Deleteflashsale)

// Update flashsale
router.post('/flashsale/update', flashsaleMiddleware.updateflashsale, flashsaleController.Updateflashsale)


module.exports = router