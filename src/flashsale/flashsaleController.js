const flashsaleServices = require('./flashsaleServices')

const All = (req, res) => {
    flashsaleServices.all(req, res)
}

const Deleteflashsale = (req, res) => {
    flashsaleServices.deleteflashsale(req, res)
}

const Addflashsale = (req, res) => {
    flashsaleServices.addflashsale(req, res)
}

const Updateflashsale = (req, res) => {
    flashsaleServices.updateflashsale(req, res)
}

module.exports = {
    All,
    Deleteflashsale,
    Addflashsale,
    Updateflashsale
}