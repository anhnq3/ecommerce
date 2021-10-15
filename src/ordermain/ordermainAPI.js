const express = require('express')
const router = express()

const ordermainMiddleware = require('./ordermainMiddleware')
const ordermainController = require('./ordermainController')

// Show ordermain
router.get('/ordermain', ordermainMiddleware.all, ordermainController.All)

// Add ordermain
router.post('/ordermain/addordermain', ordermainMiddleware.addordermain, ordermainController.Addordermain)


module.exports = router