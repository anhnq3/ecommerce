const All = (req, res) => {
    res.json('there is no product')
}

const Deleteproducts = (req, res) => {
    // res.render('home', { alert: 'Delete successfully'})
    res.json('Delete success')
}

const Addproducts = (req, res) => {
    res.json('products added success')
    // res.render('add-product', {alert: 'Product added successful', checkCookie})
}
const getAddproducts = (req, res) => {
    res.render('add-product')
}

const Updateproducts = (req, res) => {
    res.json('products updated success')
    // res.render('edit-product', { alert: 'Update successfully'})
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