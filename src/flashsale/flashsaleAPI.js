const express = require('express')
const router = express()

const flashsaleController = require('./flashsaleController')

// Show flashsale
router.get('/flashsale', flashsaleController.All)

// Add flashsale
router.post('/flashsale/addflashsale', flashsaleController.Addflashsale)

// Delete flashsale
router.delete('/flashsale/deleteflashsale', flashsaleController.Deleteflashsale)

// Update flashsale
router.post('/flashsale/update', flashsaleController.Updateflashsale)


module.exports = router