const Joi = require('joi')

const loginSchema = data => {
    const schema = Joi.object().keys({
        username: Joi.string().min(4).max(30),
        email: Joi.string().email(),
        password: Joi.string().min(4).max(30).required(),
        phoneNum: Joi.string().min(4).max(10).pattern(/^[0-9]+$/)
    }).unknown()

    return schema.validate(data)

}

const registerSchema = data => {
    const schema = Joi.object({
        username: Joi.string().min(4).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(30).required(),
        adress: Joi.string().min(4).max(200),
        phoneNum: Joi.string().min(4).max(10).pattern(/^[0-9]+$/).required(),
        role: Joi.string().valid('customer', 'admin', 'sale'),
        checkVerify: Joi.string().valid('verified', 'verify needed')
    }).unknown()

    return schema.validate(data)
}

const updateSchema = data => {
    const schema = Joi.object({
        userId: Joi.number(). required(),
        username: Joi.string().min(4).max(30),
        email: Joi.string().email(),
        password: Joi.string().min(4).max(30),
        adress: Joi.string().min(4),
        phoneNum: Joi.string().min(9).max(10).pattern(/^[0-9]+$/)
    }).unknown()

    return schema.validate(data)
}

module.exports = {
    registerSchema,
    loginSchema,
    updateSchema
}