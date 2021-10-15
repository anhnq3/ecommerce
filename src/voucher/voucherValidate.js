const Joi = require('joi')

const createSchema = data => {
    const schema = Joi.object().keys({
        productId: Joi.number().required(), 
        color: Joi.string(), 
        type: Joi.string()
    }).unknown()

    return schema.validate(data)
}

const deleteSchema = data => {
    const schema = Joi.object().keys({
        code: Joi.string().required()
    }).unknown()

    return schema.validate(data)
}

const updateSchema = data => {
    const schema = Joi.object().keys({
        productId: Joi.number().required()
    }). unknown()

    return schema.validate(data)
}

module.exports = {
    deleteSchema,
    updateSchema,
    createSchema
}