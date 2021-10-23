const express = require('express')
const router = express()

const orderMiddleware = require('./orderMiddleware')
const orderController = require('./orderController')

// Show order
router.get('/order', orderMiddleware.all, orderController.All)

// Add order
router.post('/order/addorder', orderMiddleware.addorder, orderController.Addorder)

// Delete order
router.delete('/order/deleteorder', orderMiddleware.deleteorder, orderController.Deleteorder)

// Update order
router.post('/order/updateorder', orderMiddleware.updateorder, orderController.Updateorder)

// Add voucher
router.post('/order/addvoucher', orderMiddleware.addvoucher, orderController.Addvoucher)

// Delete voucher
router.post('/order/deletevoucher', orderMiddleware.deletevoucher, orderController.Deletevoucher)


module.exports = router