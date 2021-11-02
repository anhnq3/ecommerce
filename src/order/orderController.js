const orderServices = require('./orderServices')

const All = (req, res) => {
    orderServices.all(req, res)
}

const Deleteorder = (req, res) => {
    orderServices.deleteorder(req, res)
}

const Addorder = (req, res) => {
    orderServices.addorder(req, res)
}

const Updateorder = (req, res) => {
    orderServices.updateorder(req, res)
}

const Addvoucher = (req, res) => {
    orderServices.addvoucher(req, res)
}

const Deletevoucher = (req, res) => {
    orderServices.deletevoucher(req, res)
}

module.exports = {
    All,
    Deleteorder,
    Addorder,
    Updateorder,
    Addvoucher,
    Deletevoucher
}