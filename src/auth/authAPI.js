require('dotenv').config()
const express = require('express')
const router = express()

const authController = require('./authController')
const middlewareUser = require('./authMiddleware')

//Login
router.post('/user/login',middlewareUser.login, authController.Login)

// Register
router.post('/user/register', middlewareUser.register, authController.Register)

// Verify
router.get('/user/verify', middlewareUser.verify, authController.Verify)

// Forgot Password
router.post('/user/forgot',middlewareUser.forgotpassword , authController.ForgotPassword)

// Reset password
router.post('/user/resetpassword',middlewareUser.resetpassword , authController.ResetPassword)

// Update
router.get('/user/update', authController.Update)

//Logout
router.post('/user/logout',middlewareUser.logout, authController.Logout)

// const authValidation = require('./authValidation')

module.exports = router