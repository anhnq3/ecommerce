const All = (req, res) => {
    res.json('there is no product')
}

const Deleteproducts = (req, res) => {
    res.json('Delete success')
}

const Addproducts = (req, res) => {
    res.json('products added success')
}
const getAddproducts = (req, res) => {
    res.render('add-product')
}

const Updateproducts = (req, res) => {
    res.json('products updated success')
}

const getUpdateproducts = (req, res) => {
    res.json('failed')
}

module.exports = {
    All,
    Deleteproducts,
    Addproducts,
    getAddproducts,
    Updateproducts,
    getUpdateproducts
}