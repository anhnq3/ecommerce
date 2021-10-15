const All = (req, res) => {
    res.send('There is no voucher')
}

const Deletevoucher = (req, res) => {
    res.send('voucher deleted')
}

const Addvoucher = (req, res) => {
    res.send('voucher added success')
}

const Updatevoucher = (req, res) => {
    res.send('voucher updated success')
}

module.exports = {
    All,
    Deletevoucher,
    Addvoucher,
    Updatevoucher
}