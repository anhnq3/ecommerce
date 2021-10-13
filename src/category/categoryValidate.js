const Joi = require('joi')

const Schema = data => {
    const schema = Joi.object().keys({
        categoryname: Joi.string().required(),
        categoryicon: Joi.string()
    }).unknown()

    return schema.validate(data)
}

module.exports = {
    Schema
}