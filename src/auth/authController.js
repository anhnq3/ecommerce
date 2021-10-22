// Login
const getLogin = (req,res) => {
    res.json('This is login template')
}
const Login = async (req, res) => {
    // const { username, email, phoneNum, password } = req.body
    // res.json(`You are logged in, Welcome ${user.username}`)
    res.json('Incorrect Username and/or Password!')
}

// Register
const Register = async (req, res) => {
    res.json('Registing done')
}

const Verify = async (req, res) => {
    res.json('Update success')
}

// Forgot password
const ForgotPassword = async (req, res) => {
    res.json('An restore password email have been sent to your email')
}

// Reset password
const ResetPassword = async(req, res) => {
    res.json('Password has been reseted')
}

//Update
const Update = async (req, res) => {
    res.json('Your accoount has been updated')
}

// Logout
const Logout = async (req, res) => {
    res.json('Loged out')
    // res.render('login')
}

// Delete
const Deleteuser = async (req, res) => {
    res.json('Delete account completed')
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