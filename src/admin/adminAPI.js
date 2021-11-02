require('dotenv').config()
const express = require('express')
const router = express()

const adminController = require('./adminController')

// Login
router.get('/admin', adminController.getLogin)
router.post('/admin', adminController.Login)

// Logout
router.post('/admin/logout', adminController.Logout)

// Change password
router.post('/admin/passchange', adminController.Passchange)

// Add user
router.post('/admin/adduser', adminController.Addadmin)

// Delete account
// Just user have a "admin" role to allow to delete user
router.delete('/admin/deleteadmin', adminController.Deleteadmin)

// Change role
// Just user have a "admin" role to allow to do this
router.post('/admin/roleset', adminController.Roleset)

module.exports = router