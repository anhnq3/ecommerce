const express = require('express')
const router = express()

const ordermainController = require('./ordermainController')

// Show ordermain
router.get('/ordermain', ordermainController.All)

// Add ordermain
router.post('/ordermain/addordermain', ordermainController.Addordermain)


module.exports = router