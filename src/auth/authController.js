const db = require('../../config/db')
const midLogin = require('./authMiddleware')
const jwt = require('jsonwebtoken')

// Login
const Login = async (req, res) => {
    // const { username, email, phoneNum, password } = req.body
    // res.send(`You are logged in, Welcome ${user.username}`)
    res.send(user)
}

// Register
const Register = async (req, res) => {
    res.send('Registing done')
}

const Verify = async (req, res) => {
    res.send('This is a verify')
}
 
// Forgot password
const ForgotPassword = async (req, res) => {
    res.send('This is a forgot password')
}

//Update
const Update = async (req, res) => {
    res.send('This is a update')
}

// Logout
const Logout = async (req, res) => {
    res.send('Logout')
}

module.exports = {
    Login,
    Register,
    Verify,
    ForgotPassword,
    Update,
    Logout
}