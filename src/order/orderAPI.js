const express = require('express')
const router = express()

const orderController = require('./orderController')

// Show order
router.get('/order', orderController.All)

// Add order
router.post('/order/addorder', orderController.Addorder)

// Delete order
router.delete('/order/deleteorder', orderController.Deleteorder)

// Update order
router.post('/order/updateorder', orderController.Updateorder)

// Add voucher
router.post('/order/addvoucher', orderController.Addvoucher)

// Delete voucher
router.post('/order/deletevoucher', orderController.Deletevoucher)


module.exports = router