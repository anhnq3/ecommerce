const productattributesServices = require('./productattributesServices')
const All = (req, res) => {
    productattributesServices.all(req, res)
}

const Deleteproductattributes = (req, res) => {
    productattributesServices.deleteproductattributes(req, res)
}

const Addproductattributes = (req, res) => {
    productattributesServices.addproductattributes(req, res)
}

const Updateproductattributes = (req, res) => {
    productattributesServices.updateproductattributes(req, res)
}

module.exports = {
    All,
    Deleteproductattributes,
    Addproductattributes,
    Updateproductattributes
}