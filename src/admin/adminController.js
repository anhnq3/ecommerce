const Login = async (req, res) => {
    res.send('Password incorrect')
    
}

const Logout = async (req, res) => {
    res.send('Logout complete')
}

const Passchange = async (req, res) => {
    res.send('Your password has been changed')
}

const Roleset = async (req, res) => {
    res.send ('Set role complete')
}

const Addadmin = async (req, res) => {
    res.send('Adding admin successful')
}

const Deleteadmin = async(req, res) => {
    res.send('Delelte successful')
}

module.exports = {
    Login,
    Logout,
    Passchange,
    Roleset,
    Addadmin,
    Deleteadmin
}