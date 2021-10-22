const { ordermain, order, flashsale } = require('../../models')
const ordermainValidation = require('./ordermainValidate')

const all = async (req, res, next) => {
    await ordermain.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0)
                return res.json(result)
            next()
        })
}

// This happen if you click on order button
const addordermain = async (req, res, next) => {
    // // Joi check
    // const { error } = ordermainValidation.createSchema(req.body)
    // if (error) return console.log(error)

    const {flashsaleId, userId} = req.body

    await order.findAll(
        {
            where: {
                userId: userId
            }
        }
    )
    .catch((err) => console.log(err))
    .then(async (result) => {
        if(result) {
                for(var i = 0; i < result.length; i++)
                await ordermain.create(
                    {
                        flashsaleId: flashsaleId,
                        userId: userId,
                        orderId: result[i].id
                    }
                ).catch((err) => console.log(err))
                .then((result1) => {
                    if(result1) next()
                    else return res.json('ordermain not added')
                })
                if(flashsaleId) {
                    await flashsale.findOne(
                        {
                            where: {
                                id: flashsaleId
                            }
                        }
                    ).catch((err) => console.log(err))
                    .then((result1) => {
                        if(result1) console.log(`flashsale percentage is: ${result1.flashsalediscount}%`)
                    })
                }
        }
        else
        res.json('No order has made')
    })
}


module.exports = {
    all,
    addordermain
}