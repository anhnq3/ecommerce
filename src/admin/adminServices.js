const { admins } = require('../models')

const adminValidation = require('./adminValidation')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    // Joi check
    const { error } = adminValidation.loginSchema(req.body)
    if (error) return console.log(error)

    const { username, password } = req.body
    try {
        // Admin check
        if (username && password) {
            const admin = await admins.findOne({
                where: {
                    username: username
                }
            })
            if (!admin)
                return res.json('User incorrect')

            // Get admin password and compare
            const admindetail = admin
            const admin_password = admindetail.password
            const check = await bcrypt.compare(password, admin_password)

            if (check) {
                const token = jwt.sign(
                    {
                        "username": admindetail.username,
                        "role": admindetail.role
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h"
                    }
                )

                return res.status(200).json({
                    message: "Auth successful",
                    userId: admindetail.id,
                    token: token
                })

                // return res.render('dashboard')
            }
        }
        return res.json('Password incorrect')
    }
    catch (err) {
        return res.send(err)
    }
}

const logout = async (req, res) => {
    // Joi check
    const { error } = adminValidation.logoutSchema(req.body)
    if (error) return console.log(error)

    const { id } = req.body
    try {
        const detroy = await session.destroy({ where: { id } })
        if (detroy > 0)
            return res.json('Logout complete')
        return res.json('You has insert wrong session id')
    }
    catch (err) {
        return res.send(err.message)
    }
}

const passchange = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.passchangeSchema(req.body)
    if (error) return console.log(error)

    const { id, password } = req.body

    try {
        //check admin
        const checkadmin = await admins.findOne({
            where: {
                id: id
            }
        })
        if (checkadmin) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            await admins.update(
                {
                    password: hashedPassword
                },
                {
                    where: {
                        id: id
                    }
                })
            console.log('Password updated');
            return res.json('Your password has been changed')
        }
        else return res.json('Admin id not found')
    }
    catch (err) {
        return res.send(err.message)
    }

}

const roleset = async (req, res) => {
    // Joi check
    const { error } = adminValidation.rolesetSchema(req.body)
    if (error) return console.log(error)

    const { username, role } = req.body

    try {
        // Admin check
        const admincheck = await admins.findOne({
            where: {
                username: username
            }
        })
        if (admincheck) {
            await admins.update(
                {
                    role: role
                },
                {
                    where: {
                        username: username
                    }
                })
                .then((result) => {
                    if (result < 1) return res.json('Changing role not complete')
                    else {
                        return res.json('Set role complete')
                    }
                })
        }
        else {
            res.json('Username not found')
        }

    }
    catch (err) {
        return res.send(err.message)
    }
}

const addadmin = async (req, res) => {
    // Joi check
    const { error } = adminValidation.addadminSchema(req.body)
    if (error) return console.log(error)

    const { username, password, role } = req.body

    try {

    }
    catch (err) {
        return res.send(err.message)
    }
    const admincheck = await admins.findOne({
        where: {
            username: username
        }
    })

    if (admincheck) return res.json('This user already been used')
    else {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        await admins.create({
            username: username,
            password: hashedPassword,
            role: role,
        }).catch(err => console.log(err))
        return res.json('Adding admin successful')
    }


}

const deleteadmin = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.deleteadminSchema(req.body)
    if (error) return console.log(error)

    const { username } = req.body

    const detroy = await admins.destroy({ where: { username: username } }).catch((err) => console.log(err))
        .catch((err) => console.log(err))
    if (detroy > 0)
        return res.json('Adding admin successful')
    return res.json('Username not exsits')
}

module.exports = {
    login,
    logout,
    passchange,
    roleset,
    addadmin,
    deleteadmin
}