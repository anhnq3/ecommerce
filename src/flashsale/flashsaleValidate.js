const Joi = require('joi')

const createSchema = data => {
    const schema = Joi.object().keys({
        flashsalediscount: Joi.number().required().default('10'), 
        flashsalename: Joi.string().required(),
        flashsalestartdate: Joi.date().required(),
        flashsaleenddate: Joi.date().required(),
        flashsalestatus: Joi.string().valid('active', 'inactive'),
        flashsalequantity: Joi.number().default(0),
        code: Joi.string().required(),
    }).unknown()

    return schema.validate(data)
}

const deleteSchema = data => {
    const schema = Joi.object().keys({
        flashsalename: Joi.string().required()
    }).unknown()

    return schema.validate(data)
}

const updateSchema = data => {
    const schema = Joi.object().keys({
        flashsalediscount: Joi.string().max(30), 
        flashsalename: Joi.string(),
        flashsalestartdate: Joi.date(),
        flashsaleenddate: Joi.date(),
        flashsalestatus: Joi.string().valid('active', 'inactive'),
        flashsalequantity: Joi.number().default(0),
        code: Joi.string(),
    }). unknown()

    return schema.validate(data)
}

module.exports = {
    deleteSchema,
    updateSchema,
    createSchema
}