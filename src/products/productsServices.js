const e = require('express')
const { products, category, order } = require('../models')
const productsValidation = require('./productsValidate')

var checkCookie = false

const all = async (req, res) => {
    if(req.cookies.login_user_id) checkCookie = true
    else checkCookie = false
    await products.findAll({ raw: true })
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0) {
                // return res.render('home', { result, checkCookie })
                return res.json(result)
                // console.log(result)
            }
            else {
                return res.json('No products has found')
            }
        })
}

const addproducts = async (req, res) => {
    // Joi check
    const { error } = productsValidation.createSchema(req.body)
    if (error) return console.log(error)

    const { categoryId, productname, barcode, importprice, sellingprice, weight, mainimg, imgs, quantity, description } = req.body

    // Category id check
    await category.findAll({
        where: {
            id: categoryId
        }
    }).catch((err) => console.log(err))
        .then(async (result) => {
            if (result.length < 1) {
                return res.json('categoryId not found')
            }
            else {
                // products check
                await products.findOne({
                    where: {
                        productname: productname,
                    }
                }).catch((err) => console.log(err))

                    .then(async (result) => {
                        if (result)
                            return res.json('This product name already in your products')
                        else {
                            await products.create({
                                productname: productname,
                                categoryId: categoryId,
                                barcode: barcode,
                                importprice: importprice,
                                sellingprice: sellingprice,
                                weight: weight,
                                mainimg: mainimg,
                                imgs: imgs,
                                quantity: quantity,
                                description: description
                            }).catch((err) => console.log(err))
                                .then((result) => {
                                    if (result)     
                                        res.json('products added success')
                                    else {
                                        res.json('product hasn\'t added')
                                    }
                                })
                        }
                    })
            }
        })
}

const deleteproducts = async (req, res) => {
    // Joi check
    const { error } = productsValidation.deleteSchema(req.params)
    if (error) return console.log(error)

    await order.findOne({
        where: {
            productId: req.params.id
        }
    })
    .then(async (orderfind) => {
        if(orderfind) {
            res.json('Order of this product has been made, cannot delete')
        }
        else {
            await products.destroy({
                where: {
                    id: req.params.id
                }
            }).catch((err) => console.log(err))
            .then((result) => {
                if(result) {
                    return res.json('Delete success')
                }
                else {
                    return res.json('Failed to delete products')
                }
            })
        }
    })
}

const updateproducts = async (req, res) => {
    // Joi check
    const { error } = productsValidation.updateSchema(req.body)
    if (error) return console.log(error)

    const { id, imgs, productname, categoryId, barcode, importprice, sellingprice, weight, mainimg, quantity, description } = req.body

    if (id) {
        // Order check
        order
        // Update category
        if (categoryId) {
            await products.update(
                {
                    categoryId: categoryId
                },
                {
                    where: { 
                        // productname: productname
                        id: id
                    }
                }).catch((err) => console.log(err))
                .then((result) => {
                    if (result) {
                        res.json('products updated success')
                    }
                    else {
                        return res.json('Update failed')
                    }
                })
        }
        else {
            await products.update(
                {
                    productname: productname,
                    barcode: barcode,
                    importprice: importprice,
                    sellingprice: sellingprice,
                    weight: weight,
                    mainimg: mainimg,
                    imgs: imgs,
                    quantity: quantity,
                    description: description
                },
                {
                    where: {
                        id: id
                    }
                }
            )
        }
    }

}

const getupdateproduct = async (req, res, next) => {
    await products.findAll({
        raw: true,
        where: {
            id: req.params.id
        }
    })
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0) {
                res.render('edit-product', { result })
            }
            else {
                next()

            }
        })
}

module.exports = {
    all,
    deleteproducts,
    addproducts,
    updateproducts,
    getupdateproduct
}
