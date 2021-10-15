const { productattributes, products } = require('../../models')
const productattributesValidation = require('./productattributesValidate')

const all = async (req, res, next) => {
    await productattributes.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0)
                return res.send(result)
            next()
        }).catch((err) => console.log(err))
}

const addproductattributes = async (req, res, next) => {
    // Joi check
    const { error } = productattributesValidation.createSchema(req.body)
    if (error) return console.log(error)

    const { productId, color, type } = req.body

    // valid productId check
    await products.findAll(
        {
            where: {
                id: productId
            }
        }
    ).catch((err) => console.log(err))
        .then(async(result2) => {
            if (result2.length == 0)
                return res.send('Product not found')
            else {
                // product attribute check
                await productattributes.findAll(
                    {
                        where: {
                            productId: productId
                        }
                    }
                ).catch((err) => console.log(err))
                    .then(async (result1) => {
                        if (result1.length != 0) {
                            return res.send('this product already has attribute')
                        }
                        else {
                            await productattributes.create(
                                {
                                    productId: productId,
                                    color: color,
                                    type: type
                                }
                            ).catch((err) => console.log(err))
                                .then((result) => {
                                    if (result) next()
                                    else
                                        return res.send('product attribites hasn\'t added')
                                })
                        }
                    })
            }
        })
}

// Dont need to edit
const deleteproductattributes = async (req, res, next) => {
    // Joi check
    const { error } = productattributesValidation.deleteSchema(req.body)
    if (error) return console.log(error)

    const destroy = await productattributes.destroy({
        where: {
            productId: req.body.productId
        }
    }).catch((err) => console.log(err))
    if (destroy < 1) return res.send('Product Id in order no found')
    else next()
}

const updateproductattributes = async (req, res, next) => {
    // Joi check
    const { error } = productattributesValidation.updateSchema(req.body)
    if (error) return console.log(error)

    const { productId, color, type } = req.body

    // Product Id check
    await productattributes.findOne(
        {
            where: {
                id: productId
            }
        }
    ).catch((err) => console.log(err))
        .then((result1) => {
            if (!result1) return res.send('product attributes not updated')
            else {
                if (color) {
                    productattributes.update(
                        {
                            color: color
                        },
                        {
                            where: {
                                productId: productId
                            }
                        }
                    ).catch((err) => console.log(err))
                        .then((result) => {
                            if (result) next()
                            else return res.send('product attribute hasn\'t update')
                        })
                }
                if (type) {
                    productattributes.update(
                        {
                            type: type
                        },
                        {
                            where: {
                                productId: productId
                            }
                        }
                    ).catch((err) => console.log(err))
                        .then((result) => {
                            if (result) next()
                            else return res.send('product attribute hasn\'t update')
                        })
                }
                if (color && type) {
                    productattributes.update(
                        {
                            color: color,
                            type: type
                        },
                        {
                            where: {
                                productId: productId
                            }
                        }
                    ).catch((err) => console.log(err))
                        .then((result) => {
                            if (result) next()
                            else return res.send('product attribute hasn\'t update')
                        })
                }
            }
        })


}

module.exports = {
    all,
    addproductattributes,
    deleteproductattributes,
    updateproductattributes
}