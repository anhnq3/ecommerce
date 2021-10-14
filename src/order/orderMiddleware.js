const { order } = require('../../models')
const orderValidation = require('./orderValidate')

const all = async (req, res, next) => {
    await order.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0)
                return res.send(result)
            next()
        })
}

const addorder = async (req, res, next) => {
    // Joi check
    const { error } = orderValidation.createSchema(req.body)
    if (error) return console.log(error)

    // order check
    const {productId, orderquantity, ordertotalprice} = req.body

}

const deleteorder = async (req, res, next) => {
}

const updateorder = async (req, res, next) => {
}

module.exports = {
    all,
    addorder,
    deleteorder,
    updateorder
}