const e = require('express')
const { voucher, products } = require('../../models')
const voucherValidation = require('./voucherValidate')

const all = async (req, res, next) => {
    await voucher.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0)
                return res.send(result)
            next()
        }).catch((err) => console.log(err))
}

const addvoucher = async (req, res, next) => {
    // Joi check
    const { error } = voucherValidation.createSchema(req.body)
    if (error) return console.log(error)

    const { productId, voucherdiscount, vouchername, voucherstartdate, voucherenddate, voucherstatus, voucherquantity, code } = req.body
    
    await products.findAll(
        {
            where: {
                id: productId
            }
        }
    ).catch((err) => console.log(err))
    .then(async (result) => {
        if(result.length != 0)
        {
            await voucher.create(
                {
                    productId: productId, 
                    voucherdiscount: voucherdiscount, 
                    vouchername: vouchername, 
                    voucherstartdate: voucherstartdate, 
                    voucherenddate: voucherenddate, 
                    voucherstatus: voucherstatus, 
                    voucherquantity: voucherquantity, 
                    code: code
                }
            ).catch((err) => console.log(err))
            .then((result1) => {
                if(result1) {
                    next()
                }
                else {
                    return res.send('voucher hasn\'t added')
                }
            })
        }
        else {
            res.send('product not found')
        }
    })
}

// Dont need to edit
const deletevoucher = async (req, res, next) => {
    // Joi check
    const { error } = voucherValidation.deleteSchema(req.body)
    if (error) return console.log(error)

    await voucher.destroy({
        where: {
            code: req.body.code
        }
    }).catch((err) => console.log(err))
    .then((result) => {
        if(result) next()
        else res.send('voucher hasn\'t deleted')
    })
}

const updatevoucher = async (req, res, next) => {
    // Joi check
    const { error } = voucherValidation.updateSchema(req.body)
    if (error) return console.log(error)

    const {productId, color, type} = req.body

    // Product Id check
    await voucher.findOne(
        {
            where: {
                id: productId
            }
        }
    ).catch((err) => console.log(err))
    .then((result1) => {
        if(!result1) return res.send('product attributes not updated')
        else {
            if(color) {
                voucher.update(
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
                    if(result) next()
                    else return res.send('product attribute hasn\'t update')
                })
            }
            if(type) {
                voucher.update(
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
                    if(result) next()
                    else return res.send('product attribute hasn\'t update')
                })
            }
            if(color&&type) {
                voucher.update(
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
                    if(result) next()
                    else return res.send('product attribute hasn\'t update')
                })
            }
        }
    })

    
}

module.exports = {
    all,
    addvoucher,
    deletevoucher,
    updatevoucher
}