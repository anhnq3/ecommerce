const All = (req, res) => {
    res.json('There is no order')
}

const Deleteorder = (req, res) => {
    res.json('order deleted')
}

const Addorder = (req, res) => {
    res.json('order added success')
}

const Updateorder = (req, res) => {
    res.json('order updated success')
}

const Addvoucher = (req, res) => {
    res.json('voucher deleted')
}

const Deletevoucher = (req, res) => {
    res.json('voucher deleted')
}

module.exports = {
    All,
    Deleteorder,
    Addorder,
    Updateorder,
    Addvoucher,
    Deletevoucher
}