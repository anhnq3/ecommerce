const All = (req, res) => {
    res.json('There is no flashsale')
}

const Deleteflashsale = (req, res) => {
    res.json('flashsale deleted')
}

const Addflashsale = (req, res) => {
    res.json('flashsale added success')
}

const Updateflashsale = (req, res) => {
    res.json('flashsale updated success')
}

module.exports = {
    All,
    Deleteflashsale,
    Addflashsale,
    Updateflashsale
}