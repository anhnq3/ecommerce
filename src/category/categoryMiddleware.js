const { category } = require('../../models')
const adminValidation = require('./categoryValidate')

const all = async (req, res, next) => {
    const all = await category.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0)
                return res.send(result)
            next()
        })
}

const deletecategory = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.Schema(req.body)
    if (error) return console.log(error)

    const { categoryname, categoryicon } = req.body

    const destroy = await category.destroy({
        where: {
            categoryname: categoryname
        }
    }).catch((err) => console.log(err))
    if (destroy > 0)
        return next()
    return res.send('Failed to delete category')
}

const addcategory = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.Schema(req.body)
    if (error) return console.log(error)

    const { categoryname, categoryicon } = req.body

    const categoryCheck = await category.findAll({
        where: {
            categoryname: categoryname
        }
    }).catch((err) => console.log(err))

    if (categoryCheck > 0) return res.send('This category existed')

    await category.create({
        categoryname: categoryname,
        categoryicon: categoryicon
    }).catch((err) => console.log(err))
    next()
}

module.exports = {
    all,
    deletecategory,
    addcategory
}
