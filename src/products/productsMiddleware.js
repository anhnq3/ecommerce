const { products } = require('../../models')
const productsValidation = require('./productsValidate')

const all = async (req, res, next) => {
    await products.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0)
                return res.send(result)
            next()
        })
}

const addproducts = async (req, res, next) => {
    // Joi check
    const { error } = productsValidation.createSchema(req.body)
    if (error) return console.log(error)

    const { categoryId, productname, barcode, importprice, sellingprice, weight, mainimg, imgs, quantity, description } = req.body
    
    // products check
    await products.findAll({
        where: {
            productsname: productsname
        }
    }).catch((err) => console.log(err))

        .then(async (result) => {
            if (result.length > 0)
                return res.json('This flash sale name already in your products')
            else {
                await products.create({
                    productsname: productsname,
                    productsdiscount: productsdiscount,
                    productsstartdate: productsstartdate,
                    productsenddate: productsenddate,
                    productsstatus: productsstatus,
                    productsquantity: productsquantity,
                    code: code
                }).catch((err) => console.log(err))
                next()
            }
        })
}

const deleteproducts = async (req, res, next) => {
    // Joi check
    const { error } = productsValidation.deleteSchema(req.body)
    if (error) return console.log(error)

    const { productsname } = req.body

    const destroy = await products.destroy({
        where: {
            productsname: productsname
        }
    }).catch((err) => console.log(err))
    if (destroy > 0)
        return next()
    return res.send('Failed to delete products')
}

const updateproducts = async (req, res, next) => {
    // Joi check
    const { error } = productsValidation.updateSchema(req.body)
    if (error) return console.log(error)
    
    const { productsname, productsdiscount, productsstartdate, productsenddate, productsstatus, productsquantity, code } = req.body

    if(productsname){
        if (productsdiscount) {
            await products.update(
                {
                    productsdiscount: productsdiscount
                },
                {
                    where: { productsname: productsname }
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
    
        if (productsstartdate && productsenddate) {
            await products.update(
                {
                    productsstartdate: productsstartdate,
                    productsenddate: productsenddate
                },
                {
                    where: { productsname: productsname }
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

        if (productsstatus) {
            products.update(
                {
                    productsstatus: productsstatus
                },
                {
                    where: { productsname: productsname }
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
    
        if(productsquantity){
            await products.update(
                {
                    productsquantity: productsquantity
                },
                {
                    where: { productsname: productsname }
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
            await products.update(
                {
                    code: code
                },
                {
                    where: { productsname: productsname }
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
    deleteproducts,
    addproducts,
    updateproducts
}
