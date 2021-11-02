const adminServices = require('./adminServices')

const getLogin = (req, res) => {
    adminServices.login(req, res)
    // res.render('adminlogin')
}

const Login = async (req, res) => {
    adminServices.login(req, res)
}

const Logout = async (req, res) => {
    adminServices.logout(req, res)
}

const Passchange = async (req, res) => {
    adminServices.passchange(req, res)
}

const Roleset = async (req, res) => {
    adminServices.roleset(req, res)
}

const Addadmin = async (req, res) => {
    adminServices.addadmin(req, res)
}

const Deleteadmin = async(req, res) => {
    adminServices.deleteadmin(req, res)
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