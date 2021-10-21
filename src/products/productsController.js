const All = (req, res) => {
    res.send('there is no product')
}

const Deleteproducts = (req, res) => {
    // res.render('home', { alert: 'Delete successfully'})
    res.send('Delete success')
}

const Addproducts = (req, res) => {
    res.send('products added success')
    // res.render('add-product', {alert: 'Product added successful', checkCookie})
}
const getAddproducts = (req, res) => {
    res.render('add-product')
}

const Updateproducts = (req, res) => {
    res.send('products updated success')
    // res.render('edit-product', { alert: 'Update successfully'})
}

const getUpdateproducts = (req, res) => {
    res.send('failed')
}

module.exports = {
    All,
    Deleteproducts,
    Addproducts,
    getAddproducts,
    Updateproducts,
    getUpdateproducts
}