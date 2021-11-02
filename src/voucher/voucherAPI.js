const express = require('express')
const router = express()

const voucherController = require('./voucherController')

// Show voucher
router.get('/voucher', voucherController.All)

// Add voucher
router.post('/voucher/addvoucher', voucherController.Addvoucher)

// Delete voucher
router.delete('/voucher/deletevoucher',voucherController.Deletevoucher)

// Update voucher
router.post('/voucher/updatevoucher',voucherController.Updatevoucher)


module.exports = router