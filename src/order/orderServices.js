const { order, products, voucher } = require('../models')
const orderValidation = require('./orderValidate')

const all = async (req, res) => {
    await order.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0)
                return res.send(result)
                return res.json('There is no order')
                
        })
}

const addorder = async (req, res) => {
    // Joi check
    const { error } = orderValidation.createSchema(req.body)
    if (error) return console.log(error)

    const { productId, orderquantity } = req.body

    // order check
    // update when the product id exists
    await order.findOne(
        {
            where: {
                productId: productId
            }
        }
    ).catch((err) => console.log(err))
        .then(async (result) => {
            if (result) {
                await order.findOne(
                    {
                        where: {
                            productId: productId
                        }
                    }).catch((err) => console.log(err))
                    .then(async (result1) => {
                        const productFind = await products.findOne(
                            {
                                where: {
                                    id: productId
                                }
                            }).catch((err1) => console.log(err1))

                        const ordertotalprice = productFind.sellingprice * orderquantity

                        const quantity = orderquantity + result1.orderquantity
                        const total = result1.ordertotalprice + ordertotalprice
                        await order.update(
                            {
                                orderquantity: quantity,
                                ordertotalprice: total
                            }
                            , {
                                where: { productId: productId }
                            }
                        )
                        next()
                    })
            }
            else {
                // order total price
                await products.findOne(
                    {
                        where: {
                            id: productId
                        }
                    }).catch((err1) => console.log(err1))

                    .then(async (result1) => {
                        if (result1) {
                            const ordertotalprice = result1.sellingprice * orderquantity

                            await order.create(
                                {
                                    userId: req.cookies.login_user_id,
                                    productId: productId,
                                    orderquantity: orderquantity,
                                    ordertotalprice: ordertotalprice
                                }
                            ).catch((err) => console.log(err))

                            next()
                        }
                        else {
                            res.send('product not found')
                        }
                    })
            }
        })
}

const deleteorder = async (req, res) => {
    const destroy = await order.destroy({
        where: {
            productId: req.body.productId
        }
    }).catch((err) => console.log(err))
    if (destroy < 1) return res.send('Product Id in order no found')
    else     res.json('order deleted')

}

const updateorder = async (req, res) => {
    const { productId, orderquantity } = req.body

    await order.update(
        {
            orderquantity: orderquantity,
        },
        {
            where: {
                productId: productId
            }
        }
    ).catch((err) => console.log(err))
        .then(async (result) => {
            if (result[0] != 0) {
                // Get price from product where product id updated
                await products.findOne(
                    {
                        where: {
                            id: productId
                        }
                    }
                ).catch((err) => console.log(err))
                    .then(async (result1) => {
                        // Calculate update total
                        const total_updated = result1.sellingprice * orderquantity

                        // Update total from order update
                        await order.update(
                            {
                                ordertotalprice: total_updated
                            },
                            {
                                where: {
                                    productId: productId
                                }
                            }
                        ).catch((err) => console.log(err))
                    })

            }
            // else return res.send('Product hasn\'t add')
        })
        return res.json('order updated success')


}

const addvoucher = async (req, res) => {
    // This only update voucher code after they done with product
    const { productId, vouchercode } = req.body

    var voucher_discount
    // get voucher discount
    await voucher.findOne(
        {
            where: {
                code: vouchercode
            }
        }).then(async (result) => {
            var total = 0
            if (result) {
                voucher_discount = result.voucherdiscount
                await order.findOne({
                    where: {
                        productId: productId
                    }
                }).then(async (result1) => {
                    // get total price
                    total = result1.ordertotalprice
                    // calculate total price after add voucher
                    // update total price
                    var final_total = total * (100 - voucher_discount) / 100
                    await order.update({
                        ordertotalprice: final_total
                    },
                        {
                            where: {
                                productId: productId
                            }
                        })
                })
                res.json('order added success')
            }
            else res.json('Voucher code not exsist')
        })
}

const deletevoucher = async (req, res) => {
    // This only update voucher code after they done with product
    const { productId, vouchercode } = req.body

    var voucher_discount
    // get voucher discount
    await voucher.findOne(
        {
            where: {
                code: vouchercode
            }
        }).then(async (result) => {
            var total = 0
            if (result) {
                voucher_discount = result.voucherdiscount
                await order.findOne({
                    where: {
                        productId: productId
                    }
                }).then(async (result1) => {
                    // get total price
                    total = result1.ordertotalprice
                    // calculate total price after add voucher
                    // update total price
                    var final_total = total / (100 - voucher_discount) * 100
                    await order.update({
                        ordertotalprice: final_total
                    },
                        {
                            where: {
                                productId: productId
                            }
                        })
                })
                res.json('voucher deleted')
            }
            else res.json('Voucher code not exsist')
        })
}

module.exports = {
    all,
    addorder,
    deleteorder,
    updateorder,
    addvoucher,
    deletevoucher
}