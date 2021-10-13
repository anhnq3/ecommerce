const All = (req, res) => {
    res.send('There is no order')
}

const Deleteorder = (req, res) => {
    res.send('order deleted')
}

const Addorder = (req, res) => {
    res.send('order added success')
}

const Updateorder = (req, res) => {
    res.send('order updated success')
}

module.exports = {
    All,
    Deleteorder,
    Addorder,
    Updateorder
}