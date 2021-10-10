require('dotenv').config()
const express = require('express')
const router = express()

const adminController = require('./adminController')
const adminMiddleware = require('./adminMiddleware')

// Login
router.get('/admin', adminMiddleware.login, adminController.Login)

// Logout
router.get('/admin/logout', adminMiddleware.logout, adminController.Logout)

// Change password
router.get('/admin', adminMiddleware.passchange, adminController.Passchange)


module.exports = router