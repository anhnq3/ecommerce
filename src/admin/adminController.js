const Login = async (req, res) => {
    // const { username, email, phoneNum, password } = req.body
    // res.send(`You are logged in, Welcome ${user.username}`)
    res.send('You are logged in as a user')
}

const Logout = async (req, res) => {
    // const { username, email, phoneNum, password } = req.body
    // res.send(`You are logged in, Welcome ${user.username}`)
    res.send('You are logged in as a user')
}

const Passchange = async (req, res) => {
    // const { username, email, phoneNum, password } = req.body
    // res.send(`You are logged in, Welcome ${user.username}`)
    res.send('You are logged in as a user')
}

module.exports = {
    Login,
    Logout,
    Passchange
}