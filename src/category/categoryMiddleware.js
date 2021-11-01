const { category } = require('../models')
const adminValidation = require('./categoryValidate')

const all = async (req, res, next) => {
    await category.findAll()
        .catch((err) => console.log(err))
        .then((result) => {
            if (result.length > 0)
                return res.json(result)
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
    return res.json('Failed to delete category')
}

const addcategory = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.Schema(req.body)
    if (error) return console.log(error)

    const { categoryname, categoryicon } = req.body

    await category.findOne({
        where: {
            categoryname: categoryname
        }
    }).catch((err) => console.log(err))
    .then(async (find) => {
        if(find) {
            return res.json('This category existed')
        }
        else {
            await category.create({
                categoryname: categoryname,
                categoryicon: categoryicon
            }).catch((err) => console.log(err))
            .then((result) => {
                if(result) next()
                else return res.json('category hasn\'t added')
            })
        }
    })
}

const updatecategory = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.Schema(req.body)
    if (error) return console.log(error)

    const { categoryname, categoryicon, newcategoryname } = req.body

    await category.findOne(
        {
            where: {
                categoryname: categoryname
            }
        }
    ).catch((err) => console.log(err))
    .then(async (result) => {
        if(!result) 
            return res.json('categoryname not found')
        else
        {
            //check category name
            await category.findOne(
                {
                    where: {
                        categoryname: newcategoryname
                    }
                }
            ).then(async (result1) => {
                if(result1) {
                    res.json('This name has been used')
                }
                else {
                    await category.update(
                        {
                            categoryname: newcategoryname,
                            categoryicon: categoryicon
                        },
                        {
                            where: {
                                categoryname: categoryname
                            }
                    }).catch((err) => console.log(err))
                    
                    next()
                }
            })
        } 
    })    
}

module.exports = {
    all,
    deletecategory,
    addcategory,
    updatecategory
}
