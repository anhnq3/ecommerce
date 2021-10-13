require('dotenv').config()
const express = require('express')
const router = express()

const adminController = require('./adminController')
const adminMiddleware = require('./adminMiddleware')

// Login
router.post('/admin/login', adminMiddleware.login, adminController.Login)

// Logout
router.post('/admin/logout', adminMiddleware.logout, adminController.Logout)

// Change password
router.post('/admin/passchange', adminMiddleware.passchange, adminController.Passchange)

// Change role
// Just user have a "admin" role to allow to do this
router.post('/admin/roleset', adminMiddleware.roleset, adminController.Roleset)

// Add user
router.post('/admin/adduser', adminMiddleware.addadmin, adminController.Addadmin)

// Delete account
// Just user have a "admin" role to allow to delete user
router.post('/admin/deleteadmin', adminMiddleware.deleteadmin, adminController.Deleteadmin)




module.exports = router