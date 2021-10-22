const express = require('express')
const router = express()

const voucherMiddleware = require('./voucherMiddleware')
const voucherController = require('./voucherController')

// Show voucher
router.get('/voucher', voucherMiddleware.all, voucherController.All)

// Add voucher
router.post('/voucher/addvoucher', voucherMiddleware.addvoucher, voucherController.Addvoucher)

// Delete voucher
router.delete('/voucher/deletevoucher', voucherMiddleware.deletevoucher, voucherController.Deletevoucher)

// Update voucher
router.post('/voucher/updatevoucher', voucherMiddleware.updatevoucher, voucherController.Updatevoucher)


module.exports = router