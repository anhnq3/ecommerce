const { flashsale } = require('../models')
const flashsaleValidation = require('./flashsaleValidate')

const all = async (req, res, next) => {
    await flashsale.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0)
                return res.json(result)
            next()
        })
}

const deleteflashsale = async (req, res, next) => {
    // Joi check
    const { error } = flashsaleValidation.deleteSchema(req.body)
    if (error) return console.log(error)

    const { flashsalename } = req.body

    const destroy = await flashsale.destroy({
        where: {
            flashsalename: flashsalename
        }
    }).catch((err) => console.log(err))
    if (destroy > 0)
        return next()
    return res.json('Failed to delete flashsale')
}

const addflashsale = async (req, res, next) => {
    // Joi check
    const { error } = flashsaleValidation.createSchema(req.body)
    if (error) return console.log(error)

    const { flashsalename, flashsalediscount, flashsalestartdate, flashsaleenddate, flashsalestatus, flashsalequantity, code } = req.body
    // flashsale check
    await flashsale.findOne({
        where: {
            flashsalename: flashsalename
        }
    }).catch((err) => console.log(err))

        .then(async (result) => {
            if (result)
                return res.json('This flash sale name already in your flashsale')
            else {
                await flashsale.create({
                    flashsalename: flashsalename,
                    flashsalediscount: flashsalediscount,
                    flashsalestartdate: flashsalestartdate,
                    flashsaleenddate: flashsaleenddate,
                    flashsalestatus: flashsalestatus,
                    flashsalequantity: flashsalequantity,
                    code: code
                }).catch((err) => console.log(err))
                next()
            }
        })
}

const updateflashsale = async (req, res, next) => {
    // Joi check
    const { error } = flashsaleValidation.updateSchema(req.body)
    if (error) return console.log(error)
    
    const { flashsalename, flashsalediscount, flashsalestartdate, flashsaleenddate, flashsalestatus, flashsalequantity, code } = req.body

    if(flashsalename){
        if (flashsalediscount) {
            await flashsale.update(
                {
                    flashsalediscount: flashsalediscount
                },
                {
                    where: { flashsalename: flashsalename }
                }).catch((err) => console.log(err))
                .then((result) => {
                    if (result[0] === 0) {
                        return res.json('Update failed')
                    }
                    else {
                        next()
                    }
                })
        }
    
        if (flashsalestartdate && flashsaleenddate) {
            await flashsale.update(
                {
                    flashsalestartdate: flashsalestartdate,
                    flashsaleenddate: flashsaleenddate
                },
                {
                    where: { flashsalename: flashsalename }
                }).catch((err) => console.log(err))
    
                .then((result) => {
                    if (result[0] === 0) {
                        return res.json('Update failed')
                    }
                    else {
                        next()
                    }
                })
        }

        if (flashsalestatus) {
            flashsale.update(
                {
                    flashsalestatus: flashsalestatus
                },
                {
                    where: { flashsalename: flashsalename }
                }).catch((err) => console.log(err))
    
                .then((result) => {
                    if (result[0] === 0) {
                        return res.json('Update failed')
                    }
                    else {
                        next()
                    }
                })
            }
    
        if(flashsalequantity){
            await flashsale.update(
                {
                    flashsalequantity: flashsalequantity
                },
                {
                    where: { flashsalename: flashsalename }
                }).catch((err) => console.log(err))
    
                .then((result) => {
                    if (result[0] === 0) {
                        return res.json('Update failed')
                    }
                    else {
                        next()
                    }
                })
        }

        if(code){
            await flashsale.update(
                {
                    code: code
                },
                {
                    where: { flashsalename: flashsalename }
                }).catch((err) => console.log(err))
    
                .then((result) => {
                    if (result[0] === 0) {
                        return res.json('Update failed')
                    }
                    else {
                        next()
                    }
                })
        }
    }
    
}

module.exports = {
    all,
    deleteflashsale,
    addflashsale,
    updateflashsale
}
