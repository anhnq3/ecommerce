const ordermainService = require('./ordermainServices')

const All = (req, res) => {
    ordermainService.all(req, res)
}

const Addordermain = (req, res) => {
    ordermainService.addordermain(req, res)
}

module.exports = {
    All,
    Addordermain
}