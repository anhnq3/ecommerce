const e = require('express')
const { voucher, products } = require('../models')
const voucherValidation = require('./voucherValidate')

const all = async (req, res, next) => {
    await voucher.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0)
                return res.json(result)
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
                    return res.json('voucher hasn\'t added')
                }
            })
        }
        else {
            res.json('product not found')
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
        else res.json('voucher hasn\'t deleted')
    })
}

const updatevoucher = async (req, res, next) => {
    // Joi check
    const { error } = voucherValidation.updateSchema(req.body)
    if (error) return console.log(error)

    const { id, productId, voucherdiscount, vouchername, voucherstartdate, voucherenddate, voucherstatus, voucherquantity, code } = req.body

    // Product Id check
    await products.findOne(
        {
            where: {
                id: productId
            }
        }
    ).catch((err) => console.log(err))
    .then(async (result1) => {
        if(!result1) return res.json('product id not found')
        else {
            if(id == '' || id == undefined) {
                return res.json('id is empty')
            }
            else {
                if(voucherdiscount) {
                    await voucher.update(
                        {
                            voucherdiscount: voucherdiscount
                        },
                        {
                            where: {
                                id: id
                            }
                        }
                    ).catch((err) => console.log(err))
                    .then((result) => {
                        if(result) console.log('Voucher discount updated')
                        else return console.log('voucher discount hasn\'t update')
                    })
                }
    
                if(vouchername) {
                    await voucher.update(
                        {
                            vouchername: vouchername
                        },
                        {
                            where: {
                                id: id
                            }
                        }
                    ).catch((err) => console.log(err))
                    .then((result) => {
                        if(result) console.log('Voucher name updated')
                        else return console.log('Voucher name hasn\'t update')
                    })
                }
    
                if(voucherstartdate && voucherenddate) {
                    await voucher.update(
                        {
                            voucherenddate: voucherenddate
                        },
                        {
                            where: {
                                id: id
                            }
                        }
                    ).catch((err) => console.log(err))
                    .then((result) => {
                        if(result) console.log('Voucher end  date updated')
                        else return console.log('Voucher end date hasn\'t update')
                    })
                }
    
                if(voucherstartdate) {
                    await voucher.update(
                        {
                            voucherstartdate: voucherstartdate
                        },
                        {
                            where: {
                                id: id
                            }
                        }
                    ).catch((err) => console.log(err))
                    .then((result) => {
                        if(result) console.log('Voucher start updated')
                        else return console.log('Voucher start date hasn\'t update')
                    })
                }
    
                if(voucherquantity) {
                    await voucher.update(
                        {
                            voucherquantity: voucherquantity
                        },
                        {
                            where: {
                                id: id
                            }
                        }
                    ).catch((err) => console.log(err))
                    .then((result) => {
                        if(result) console.log('Voucher quantity updated')
                        else return console.log('voucher quantity hasn\'t update')
                    })
                }
    
                if(voucherstatus) {
                    await voucher.update(
                        {
                            voucherstatus: voucherstatus
                        },
                        {
                            where: {
                                id: id
                            }
                        }
                    ).catch((err) => console.log(err))
                    .then((result) => {
                        if(result) console.log('Voucher status updated')
                        else return console.log('Voucher status hasn\'t update')
                    })
                }
    
                if(code) {
                    await voucher.update(
                        {
                            code: code
                        },
                        {
                            where: {
                                id: id
                            }
                        }
                    ).catch((err) => console.log(err))
                    .then((result) => {
                        if(result) console.log('Voucher code updated')
                        else return console.log('Voucher code hasn\'t update')
                    })
                }
                next()
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