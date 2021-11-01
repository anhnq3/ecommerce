const { admins } = require('../models')

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
        const admin = await admins.findOne({
            where: {
                username: username
            }
        }).catch(err => res.json(err))
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
    res.json('You has insert wrong session id')
}

const passchange = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.passchangeSchema(req.body)
    if (error) return console.log(error)

    const { id, password } = req.body

    //check admin
    await admins.findOne({
        where: {
            id: id
        }
    }).catch((err) => console.log(err))
    .then(async (result) => {
        if(result) {
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
        else return res.json('Admin id not found')
    })

    
}

const roleset = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.rolesetSchema(req.body)
    if (error) return console.log(error)

    const { username, role } = req.body

    // Admin check
    admins.findOne({
        where: {
            username: username
        }
    }).catch((err) => console.log(err))
    .then(async (result) => {
        if(result) {
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
                    if (result < 1) return res.json('Changing role not complete')
                    else {
                        console.log('Role updated')
                        next()
                    }
                })
        }
        else {
            res.json('Username not found')
        }
    })
    
}

const addadmin = async (req, res, next) => {
    // Joi check
    const { error } = adminValidation.addadminSchema(req.body)
    if (error) return console.log(error)

    const { username, password, role } = req.body

    const admincheck = await admins.findOne({
        where: {
            username: username
        }
    }).catch((err) => console.log(err))
    .then((result) => {
        if(!result) console.log('added')
        else console.log(result)
    })

    if (admincheck > 0) return res.json('This user already been used')
    else {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        await admins.create({
            username: username,
            password: hashedPassword,
            role: role,
        }).catch(err => console.log(err))
        next()
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
        return next()
    res.json('Username not exsits')
}

module.exports = {
    login,
    logout,
    passchange,
    roleset,
    addadmin,
    deleteadmin
}