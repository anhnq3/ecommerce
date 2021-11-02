require('dotenv').config()
const express = require('express')
const router = express()

const authController = require('./authController')

//Login
router.get('/login', authController.getLogin)
router.post('/login', authController.Login)

// Register
router.post('/user/register', authController.Register)

// Verify
router.get('/user/verify', authController.Verify)

// Forgot Password
router.post('/user/forgot', authController.ForgotPassword)

// Reset password
router.post('/user/resetpassword', authController.ResetPassword)

// Update
router.post('/user/update', authController.Update)

// Logout
// router.get('/user/logout',middlewareUser.logout, authController.Logout)
router.delete('/user/logout', authController.Logout)

// Delete user
router.delete('/user/delete/:id', authController.Deleteuser)

module.exports = router