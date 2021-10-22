const All = (req, res) => {
    // res.json('Cannot get catergory')
    res.json('There is no category')
}

const Deletecategory = (req, res) => {
    res.json('Category deleted')
}

const Addcategory = (req, res) => {
    res.json('Category added success')
}

const Updatecategory = (req, res) => {
    res.json('Category updated')
}

module.exports = {
    All,
    Deletecategory,
    Addcategory,
    Updatecategory
}