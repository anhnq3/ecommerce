const All = (req, res) => {
    res.json('There is no product attributes')
}

const Deleteproductattributes = (req, res) => {
    res.json('product attributes deleted')
}

const Addproductattributes = (req, res) => {
    res.json('product attributes added success')
}

const Updateproductattributes = (req, res) => {
    res.json('product attributes updated success')
}

module.exports = {
    All,
    Deleteproductattributes,
    Addproductattributes,
    Updateproductattributes
}