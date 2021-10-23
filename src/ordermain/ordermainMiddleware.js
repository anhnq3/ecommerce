const { ordermain, order, flashsale } = require('../../models')
const ordermainValidation = require('./ordermainValidate')

const all = async (req, res, next) => {
    await ordermain.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result)
                return res.json(result)
            else next()
        })
}

// This happen if you click on order button
const addordermain = async (req, res, next) => {
    // // Joi check
    // const { error } = ordermainValidation.createSchema(req.body)
    // if (error) return console.log(error)

    // This will export every order you has made
    if (typeof (req.cookies.login_user_id) != 'undefined') {
        const { flashsaleCode } = req.body
        var bill = 0

        // if flashsaleCode = null => demo flashsalecode with discount 0%
        if (typeof (flashsaleCode) == 'undefined') {
            await flashsale.findOne({
                where: {
                    code: 'code'
                }
            })
                .then(async (result) => {
                    var flashsale_id
                    if (result) {
                        flashsale_id = result.id
                        await order.findAll(
                            {
                                where: {
                                    userId: req.cookies.login_user_id
                                }
                            }
                        ).then(async (result1) => {
                            for (var i = 0; i < result1.length; i++) {
                                await ordermain.create(
                                    {
                                        userId: req.cookies.login_user_id,
                                        flashsaleId: flashsale_id,
                                        orderId: result1[i].id,
                                        total: result1[i].ordertotalprice * (100 - result.flashsalediscount) / 100
                                    }).catch((err) => console.log(err))
                                    .then((result2) => {
                                        if (result2)
                                            {
                                                bill =+ result2.total
                                            }
                                    })
                                    
                            }
                            res.json(`Total bill of your order is:  ${bill}`)
                        })
                    }
                    else {
                        next()
                    }
                })
                .catch((err) => console.log(err))
        }
        else {
            await flashsale.findOne({
                where: {
                    code: flashsaleCode
                }
            })
                .then(async (result) => {
                    var flashsale_id
                    if (result) {
                        flashsale_id = result.id
                        await order.findAll(
                            {
                                where: {
                                    userId: req.cookies.login_user_id
                                }
                            }
                        ).then(async (result1) => {
                            for (var i = 0; i < result1.length; i++) {
                                await ordermain.create(
                                    {
                                        userId: req.cookies.login_user_id,
                                        flashsaleId: flashsale_id,
                                        orderId: result1[i].id,
                                        total: result1[i].ordertotalprice * (100 - result.flashsalediscount) / 100
                                    }).catch((err) => console.log(err))
                                    .then((result2) => {
                                        if (result2)
                                            {
                                                bill =+ result2.total
                                            }

                                    })
                            }
                            console.log('Total your order is: ', bill)
                        })
                        next()
                    }
                    else {
                        res.json('There is no flash sale code like that')
                    }
                })
                .catch((err) => console.log(err))
        }
        // var bill
        // console.log('total you have to pay is: ', bill)
    }

    else {
        res.json('You are not login yet')
    }

}


module.exports = {
    all,
    addordermain
}