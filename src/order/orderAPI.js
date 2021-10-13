const express = require('express')
const router = express()

const orderMiddleware = require('./orderMiddleware')
const orderController = require('./orderController')

// Show order
router.get('/order', orderMiddleware.all, orderController.All)

// Add order
router.post('/order/addorder', orderMiddleware.addorder, orderController.Addorder)

// Delete order
router.post('/order/deleteorder', orderMiddleware.deleteorder, orderController.Deleteorder)

// Update order
router.post('/order/update', orderMiddleware.updateorder, orderController.Updateorder)


module.exports = router