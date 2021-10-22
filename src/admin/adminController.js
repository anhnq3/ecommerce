const getLogin = (req, res) => {
    res.json('This is admin login template')
    // res.render('adminlogin')
}

const Login = async (req, res) => {
    res.json('Password incorrect')   
}

const Logout = async (req, res) => {
    res.json('Logout complete')
}

const Passchange = async (req, res) => {
    res.json('Your password has been changed')
}

const Roleset = async (req, res) => {
    res.json ('Set role complete')
}

const Addadmin = async (req, res) => {
    res.json('Adding admin successful')
}

const Deleteadmin = async(req, res) => {
    res.json('Delelte successful')
}

module.exports = {
    getLogin,
    Login,
    Logout,
    Passchange,
    Roleset,
    Addadmin,
    Deleteadmin
}