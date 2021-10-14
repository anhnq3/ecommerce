const All = (req, res) => {
    res.send('there is no product')
}

const Deleteproducts = (req, res) => {
    res.send('products deleted')
}

const Addproducts = (req, res) => {
    res.send('products added success')
}

const Updateproducts = (req, res) => {
    res.send('products updated success')
}

module.exports = {
    All,
    Deleteproducts,
    Addproducts,
    Updateproducts
}