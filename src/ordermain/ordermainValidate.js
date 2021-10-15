const Joi = require('joi')

const createSchema = data => {
    const schema = Joi.object().keys({
        userId: Joi.number().required(),
        orderId: Joi.number().required(),
        flashsaleId: Joi.number(),
        totalprice: Joi.number()
    }).unknown()

    return schema.validate(data)
}

const deleteSchema = data => {
    const schema = Joi.object().keys({
        
    }).unknown()

    return schema.validate(data)
}

const updateSchema = data => {
    const schema = Joi.object().keys({
               
    }). unknown()

    return schema.validate(data)
}

module.exports = {
    deleteSchema,
    updateSchema,
    createSchema
}