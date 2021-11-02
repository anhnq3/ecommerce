const voucherServices = require('./voucherServices')

const All = (req, res) => {
    voucherServices.all(req, res)
}

const Deletevoucher = (req, res) => {
    voucherServices.deletevoucher(req, res)
}

const Addvoucher = (req, res) => {
    voucherServices.addvoucher(req, res)
}

const Updatevoucher = (req, res) => {
    voucherServices.updatevoucher(req, res)
}

module.exports = {
    All,
    Deletevoucher,
    Addvoucher,
    Updatevoucher
}