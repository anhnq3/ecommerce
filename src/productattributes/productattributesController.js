const All = (req, res) => {
    res.send('There is no product attributes')
}

const Deleteproductattributes = (req, res) => {
    res.send('product attributes deleted')
}

const Addproductattributes = (req, res) => {
    res.send('product attributes added success')
}

const Updateproductattributes = (req, res) => {
    res.send('product attributes updated success')
}

module.exports = {
    All,
    Deleteproductattributes,
    Addproductattributes,
    Updateproductattributes
}