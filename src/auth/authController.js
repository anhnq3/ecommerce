// Login
const Login = async (req, res) => {
    // const { username, email, phoneNum, password } = req.body
    // res.send(`You are logged in, Welcome ${user.username}`)
    res.send('Incorrect Username and/or Password!')
}

// Register
const Register = async (req, res) => {
    res.send('Registing done')
}

const Verify = async (req, res) => {
    res.send('Update success')
}

// Forgot password
const ForgotPassword = async (req, res) => {
    res.send('An restore password email have been sent to your email')
}

// Reset password
const ResetPassword = async(req, res) => {
    res.send('Password has been reseted')
}

//Update
const Update = async (req, res) => {
    res.send('Your accoount has been updated')
}

// Logout
const Logout = async (req, res) => {
    res.send('Loged out')
}


module.exports = {
    Login,
    Register,
    Verify,
    ForgotPassword,
    Update,
    Logout,
    ResetPassword
}