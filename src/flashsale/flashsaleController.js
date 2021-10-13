const All = (req, res) => {
    res.send('There is no flashsale')
}

const Deleteflashsale = (req, res) => {
    res.send('flashsale deleted')
}

const Addflashsale = (req, res) => {
    res.send('flashsale added success')
}

const Updateflashsale = (req, res) => {
    res.send('flashsale updated success')
}

module.exports = {
    All,
    Deleteflashsale,
    Addflashsale,
    Updateflashsale
}