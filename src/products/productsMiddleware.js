const { products, category } = require('../../models')
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

    // Category id check
    await category.findAll({
        where: {
            id: categoryId
        }
    }).catch((err) => console.log(err))
        .then(async (result) => {
            if (result.length < 1) {
                return res.send('categoryId not found')
            }
            else {
                // products check
                await products.findAll({
                    where: {
                        productname: productname,
                    }
                }).catch((err) => console.log(err))

                    .then(async (result) => {
                        if (result.length > 0)
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
                                if(result) next()
                                else {
                                    res.send('product hasn\'t added')
                                }
                            })
                        }
                    })
            }
        })


}

const deleteproducts = async (req, res, next) => {
    // Joi check
    const { error } = productsValidation.deleteSchema(req.body)
    if (error) return console.log(error)

    const { id } = req.body

    const destroy = await products.destroy({
        where: {
            id: id
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

    const { id,categoryId, productname, barcode, importprice, sellingprice, weight, mainimg, imgs, quantity, description } = req.body

    if (productname) {
        // Update category
        if(categoryId) {
            await products.update(
                {
                    categoryId: categoryId
                },
                {
                    where: { productname: productname }
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

module.exports = {
    all,
    deleteproducts,
    addproducts,
    updateproducts
}
