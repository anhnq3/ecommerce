const Joi = require('joi')

const loginSchema = data => {
    const schema = Joi.object().keys({
        username: Joi.string().min(4).max(30),
        password: Joi.string().min(4).max(30).required()
}).unknown()

    return schema.validate(data)

} 

module.exports = {
    loginSchema
}
