const { admins } = require('../../models')

// const { session } = require('../../models')

const adminValidation = require('./adminValidation')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.loginSchema(req.body)
    if (error) return console.log(error)

    const { username, password } = req.body

    // Admin check
    if (username && password) {
        const admin = await admins.findAll({
            where: {
                username: username
            }
        }).catch(err => res.send(err))
        if (admin.length < 1)
            return res.send('User incorrect')

        // Get admin password and compare
        const admindetail = admin[0]
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

            // await session.create({
            //     userId: admindetail.id,
            //     jwt: token
            // }).catch(err => console.log(err))

            // const sessiondb = await session.findAll({
            //     where: {
            //         userId: admindetail.id
            //     }
            // }).catch(err => console.log(err))

            // var sessionId = sessiondb[0].id
            // console.log('sessionId: ', sessionId)
            // console.log('Remember to logout')

            return res.status(200).json({
                message: "Auth successful",
                userId: admindetail.id,
                token: token
            })
        }
    }
    next()
}

const logout = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.logoutSchema(req.body)
    if (error) return console.log(error)

    const { id } = req.body

    const detroy = await session.destroy({ where: { id } }).catch((err) => console.log(err))
        .catch((err) => console.log(err))
    if (detroy > 0)
        return next()
    res.send('You has insert wrong session id')
}

const passchange = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.passchangeSchema(req.body)
    if (error) return console.log(error)

    const { id, password } = req.body

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
        }).catch((err) => console.log(err))
    console.log('Password updated');
    next()
}

const roleset = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.rolesetSchema(req.body)
    if (error) return console.log(error)

    const { username, role } = req.body

    await admins.update(
        {
            role: role
        },
        {
            where: {
                username: username
            }
        }).catch((err) => console.log(err))
    .then((result) => {
        if(result < 1) return res.send('Changing role not complete')
    next() 
    })
}

const addadmin = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.addadminSchema(req.body)
    if (error) return console.log(error)

    const { username, password, role } = req.body

    const adminCheck = async () => {
        const admincheck = await admins.findAll({
            where: {
                username: username
            }
        }).catch((err) => console.log(err))

        if (admincheck > 0) return res.send('This user already been used')

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        await admins.create({
            username: username,
            password: hashedPassword,
            role: role,
        }).catch(err => console.log(err))
        next()
    }
    adminCheck()
}

const deleteadmin = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.deleteadminSchema(req.body)
    if (error) return console.log(error)

    const { username } = req.body

    const detroy = await admins.destroy({ where: { username: username } }).catch((err) => console.log(err))
        .catch((err) => console.log(err))
    if (detroy > 0)
        return next()
    res.send('Failed to delete admin')
}

module.exports = {
    login,
    logout,
    passchange,
    roleset,
    addadmin,
    deleteadmin
}