const All = (req, res) => {
    res.json('There is no voucher')
}

const Deletevoucher = (req, res) => {
    res.json('voucher deleted')
}

const Addvoucher = (req, res) => {
    res.json('voucher added success')
}

const Updatevoucher = (req, res) => {
    res.json('voucher updated success')
}

module.exports = {
    All,
    Deletevoucher,
    Addvoucher,
    Updatevoucher
}