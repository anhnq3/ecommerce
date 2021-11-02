const categoryServices = require('./categoryServices')

const All = (req, res) => {
    // res.json('Cannot get catergory')
    categoryServices.all(req, res)
}

const Deletecategory = (req, res) => {
    categoryServices.deletecategory(req, res)
}

const Addcategory = (req, res) => {
    categoryServices.addcategory(req, res)
}

const Updatecategory = (req, res) => {
    categoryServices.updatecategory(req, res)
}

module.exports = {
    All,
    Deletecategory,
    Addcategory,
    Updatecategory
}