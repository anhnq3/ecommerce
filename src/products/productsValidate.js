const Joi = require('joi')

const createSchema = data => {
    const schema = Joi.object().keys({
        categoryId: Joi.number().required(),
        productname: Joi.string().required(),
        barcode: Joi.string().required(),
        importprice: Joi.number().required(),
        sellingprice: Joi.number().required(),
        weight: Joi.number().default(100),
        mainimg: Joi.string(),
        imgs: Joi.string(),
        quantity: Joi.number().default(5),
        description: Joi.string()
    }).unknown()

    return schema.validate(data)
}

const deleteSchema = data => {
    const schema = Joi.object().keys({
        id: Joi.number().required()
    }).unknown()

    return schema.validate(data)
}

const updateSchema = data => {
    const schema = Joi.object().keys({
        categoryId: Joi.number(),
        productname: Joi.string().required(),
        barcode: Joi.string().max(12).required(),
        importprice: Joi.number().required(),
        sellingprice: Joi.number().required(),
        weight: Joi.number().default(100),
        mainimg: Joi.string(),
        imgs: Joi.string(),
        quantity: Joi.number().default(5),
        description: Joi.string()
    }). unknown()

    return schema.validate(data)
}

module.exports = {
    deleteSchema,
    updateSchema,
    createSchema
}