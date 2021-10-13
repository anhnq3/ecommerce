const Joi = require('joi')

const addadminSchema = data => {
    const schema = Joi.object().keys({
        username: Joi.string().min(4).max(30).required(),
        password: Joi.string().min(4).max(30).required(),
        role: Joi.string().valid('admin', 'manager').default('manager')
}).unknown()

    return schema.validate(data)

} 

const deleteadminSchema = data => {
    const schema = Joi.object().keys({
        username: Joi.string().required()
    }).unknown()

    return schema.validate(data)
}

const loginSchema = data => {
    const schema = Joi.object().keys({
        username: Joi.string().min(4).max(30),
        password: Joi.string().min(4).max(30).required(),
        role: Joi.string().valid('admin', 'manager')
}).unknown()

    return schema.validate(data)

}

const logoutSchema = data => {
    const schema = Joi.object().keys({
        id: Joi.number().required()
    })
    
    return schema.validate(data)
}

const passchangeSchema = data => {
    const schema = Joi.object().keys({
        password: Joi.string().min(4).max(30).required(),
    }).unknown()

    return schema.validate(data)
} 

const rolesetSchema = data => {
    const schema = Joi.object().keys({
        role: Joi.string().valid('admin', 'manager')
    }).unknown()

    return schema.validate(data)
}

module.exports = {
    loginSchema,
    passchangeSchema,
    rolesetSchema,
    addadminSchema,
    logoutSchema,
    deleteadminSchema
}
