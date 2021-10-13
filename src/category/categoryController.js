const All = (req, res) => {
    // res.send('Cannot get catergory')
    res.send('There is no category')
}

const Deletecategory = (req, res) => {
    res.send('Category deleted')
}

const Addcategory = (req, res) => {
    res.send('Category added success')
}

module.exports = {
    All,
    Deletecategory,
    Addcategory
}