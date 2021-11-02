const authServices = require('./authServices')

// Login
const getLogin = (req,res) => {
    res.json('This is login template')
}
const Login = async (req, res) => {
    // const { username, email, phoneNum, password } = req.body
    // res.json(`You are logged in, Welcome ${user.username}`)
    authServices.login(req, res)
}

// Register
const Register = async (req, res) => {
    authServices.register(req, res)
}

const Verify = async (req, res) => {
    authServices.verify(req, res)
}

// Forgot password
const ForgotPassword = async (req, res) => {
    authServices.forgotpassword(req, res)
}

// Reset password
const ResetPassword = async (req, res) => {
    authServices.resetpassword(req, res)
}

//Update
const Update = async (req, res) => {
    authServices.update(req, res)
}

// Logout
const Logout = async (req, res) => {
    authServices.login(req, res)
    // res.render('login')
}

// Delete
const Deleteuser = async (req, res) => {
    authServices.deleteuser(req, res)
}

module.exports = {
    Login,
    Register,
    Verify,
    ForgotPassword,
    Update,
    Logout,
    ResetPassword,
    Deleteuser,
    getLogin
}