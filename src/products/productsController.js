const productsServices = require('./productsServices')

const All = (req, res) => {
    productsServices.all(req, res)
}

const Deleteproducts = (req, res) => {
    productsServices.deleteproducts(req,res)
}

const Addproducts = (req, res) => {
    productsServices.addproducts(req, res)
}
const getAddproducts = (req, res) => {
    // res.render('add-product')
}

const Updateproducts = (req, res) => {
    productsServices.updateproducts(req, res)
}

const getUpdateproducts = (req, res) => {
    // res.json('failed')
}

module.exports = {
    All,
    Deleteproducts,
    Addproducts,
    getAddproducts,
    Updateproducts,
    getUpdateproducts
}