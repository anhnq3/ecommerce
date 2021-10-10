const { admin } = require('../../models')
const adminValidation = require('./adminValidation')

const login = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.loginSchema(req.body)
    if (error) return console.log(error)
    
    next()
}

const logout = async (req, res, next) => {
    next()
}

const passchange = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.loginSchema(req.body)
    if (error) return console.log(error)
    
    next()
}

module.exports = {
    login,
    logout,
    passchange
}