const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { session } = require('../../models')
const { users } = require('../../models')
const authValidation = require('./authValidation')
const nodemailer = require('nodemailer')

var sessionId

// Using email with this
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD
    }
})

// Login
const login = async (req, res, next) => {
    // Joi check
    const { error } = authValidation.loginSchema(req.body)
    if (error) return console.log(error)

    const { username, email, phoneNum, password } = req.body

    // By usermame
    if (username && password) {
        const user = await users.findAll({
            where: {
                username: username
            }
        }).catch(err => res.send(err))

        if (user.length < 1) return res.send('Incorrect Username and/or Password!')
        const user_password = user[0].password
        const check = await bcrypt.compare(password, user_password)
        if (!check) {
            return res.send('Incorrect Username and/or Password!')
        }
        if (check) {
            const result = await users.findAll({
                where: {
                    username: username
                }
            }).catch(err => res.send(err))
            if (result.length > 0) {
                const user = result[0]
                const token = jwt.sign(
                    {
                        "username": user.username,
                        "email": user.email,
                        "adress": user.adress,
                        "phoneNum": user.phoneNum,
                        "role": user.role,
                        "checkVerify": user.checkVerify
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h"
                    }
                )
                await session.create({
                    userId: user.id,
                    jwt: token
                }).catch(err => console.log(err))

                const sessiondb = await session.findAll({
                    where: {
                        userId: user.id
                    }
                }).catch(err => console.log(err))

                sessionId = sessiondb[0].id
                console.log('sessionId: ', sessionId)
                console.log('Remember to logout')

                return res.status(200).json({
                    message: "Auth successful",
                    token: token
                })
            }
            else {
                next()
            }
        }

    }

    // By email
    if (email && password) {
        const user = await users.findAll({
            where: {
                email: email
            }
        }).catch(err => res.send(err))

        if (user.length < 1) return res.send('Incorrect email and/or Password!')
        user_password = user[0].password
        const check = await bcrypt.compare(password, user_password)
        if (!check) {
            return res.send('Incorrect email and/or Password!')
        }
        if (check) {
            const result = await users.findAll({
                where: {
                    email: email
                }
            }).catch(err => res.send(err))
            if (result.length > 0) {
                const user = result[0]
                const token = jwt.sign(
                    {
                        "username": user.username,
                        "email": user.email,
                        "adress": user.adress,
                        "phoneNum": user.phoneNum,
                        "role": user.role,
                        "checkVerify": user.checkVerify
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h"
                    }
                )
                await session.create({
                    userId: user.id,
                    jwt: token
                }).catch(err => console.log(err))

                const sessiondb = await session.findAll({
                    where: {
                        userId: user.id
                    }
                }).catch(err => console.log(err))

                sessionId = sessiondb[0].id
                console.log('sessionId: ', sessionId)
                console.log('Remember to logout')

                return res.status(200).json({
                    message: "Auth successful",
                    token: token
                })
                next()
            }
            else {
                return res.send('Incorrect Username and/or Password!');
            }
        }
    }

    // By phonenum
    if (phoneNum && password) {
        const user = await users.findAll({
            where: {
                phoneNum: phoneNum
            }
        }).catch(err => res.send(err))

        if (user.length < 1) return res.send('Incorrect phoneNum and/or Password!')
        user_password = user[0].password
        const check = await bcrypt.compare(password, user_password)
        if (!check) {
            return res.send('Incorrect phoneNum and/or Password!')
        }
        if (check) {
            const result = await users.findAll({
                where: {
                    phoneNum: phoneNum
                }
            }).catch(err => res.send(err))
            if (result.length > 0) {
                const user = result[0]
                const token = jwt.sign(
                    {
                        "username": user.username,
                        "email": user.email,
                        "adress": user.adress,
                        "phoneNum": user.phoneNum,
                        "role": user.role,
                        "checkVerify": user.checkVerify
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h"
                    }
                )
                await session.create({
                    userId: user.id,
                    jwt: token
                }).catch(err => console.log(err))

                const sessiondb = await session.findAll({
                    where: {
                        userId: user.id
                    }
                }).catch(err => console.log(err))

                sessionId = sessiondb[0].id
                console.log('sessionId: ', sessionId)
                console.log('Remember to logout')

                return res.status(200).json({
                    message: "Auth successful",
                    token: token
                })
                next()
            }
            else {
                return res.send('Incorrect Username and/or Password!');
            }
        }
    }
}

// Register
const register = async (req, res, next) => {
    // Joi check
    const { error } = authValidation.registerSchema(req.body)
    if (error) {
        console.log(error)
        return res.send('Validate failed')
    }
    else {
        const { username, email, phoneNum, password, adress, role, checkVerify } = req.body

        // Check username
        const usernameCheck = async () => {
            const registfind = await users.findAll({
                where: {
                    username: username
                }
            }).catch(err => console.log(err))

            if (registfind.length > 0) {
                return res.send('This username has been registed')
            }
            else {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)

                users.create({
                    username: username,
                    email: email,
                    password: hashedPassword,
                    adress: adress,
                    phoneNum: phoneNum,
                    role: role,
                    checkVerify: checkVerify
                }).catch(err => console.log(err))

                    .then((add) => {
                        console.log('user created: ', add)
                        emailValidate(add.id)
                    })
                next()
            }
        }

        // Check email
        const emailCheck = async () => {
            const registfind = await users.findAll({
                where: {
                    email: email
                }
            }).catch(err => console.log(err))

            if (registfind.length > 0) return res.send('This email has been registed')
            else {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)

                users.create({
                    username: username,
                    email: email,
                    password: hashedPassword,
                    adress: adress,
                    phoneNum: phoneNum,
                    role: role,
                    checkVerify: checkVerify
                }).catch(err => console.log(err))
                next()
            }
        }

        // Check password
        const phoneNumCheck = async () => {
            const phoneNumFind = await users.findAll({
                where: {
                    phoneNum: phoneNum
                }
            }).catch(err => console.log(err))

            if (phoneNumFind.length > 0) return res.send('This phone number has been registed')
            else {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)

                users.create({
                    username: username,
                    email: email,
                    password: hashedPassword,
                    adress: adress,
                    phoneNum: phoneNum,
                    role: role,
                    checkVerify: checkVerify
                }).catch(err => console.log(err))
                next()
            }
        }

        usernameCheck()
        // emailCheck()
        // phoneNumCheck()


        const emailValidate = (uuid) => {
            // Email detail
            var mailOption = {
                from: 'quanganh',
                to: 'anhnq3@vmodev.com',
                subject: 'Verify your account',
                text: `Click to this link to verify your account: \n
                http://localhost:8080/user/verify?id=${uuid}`
            }
            transporter.sendMail(mailOption, (err, data) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log('Email verify sent')
                }
            })
        }
    }

}

// Logout(delete session)
async function logout(req, res, next) {
    const detroy = await session.destroy({ where: { id: req.body.id } }).catch((err) => console.log(err))
    if (detroy < 1)
        return console.log('________________________________\nLogout wrong session Id please logout again\n________________________________')
    next()
}

// Verify after receive email
const verify = async (req, res, next) => {
    if (req.query.id) {
        const update_checkVerify = await users.update(
            {
                checkVerify: 'verified'
            },
            {
                where: { id: req.query.id }
            }).catch((err) => console.log(err))
        if (update_checkVerify.length > 0) res.send('Update success')
        else

            next()
    }
    else {
        return res.json('error')
    }
}

// Forgot password(Get email)
const forgotpassword = async (req, res, next) => {
    const { email } = req.body
    // console.log('email: ', email)
    var forgotid
    const forgot = await users.findAll({
        where: {
            email: email
        }
    }).catch((err) => console.log(err))
        .then((user) => forgotid = user[0].id)

    if (forgot.length < 1) return res.send('Email doesn\'t exists!')
    // Email detail
    var mailOption = {
        from: 'quanganh',
        to: 'anhnq3@vmodev.com',
        subject: 'Restore your password',
        text: `Click to this link to verify your account: \n
                http://localhost:8080/user/resetpassword?resetpassword=${forgotid}`
    }
    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Email restore password has sent')
        }
    })
    next()
}

// Reset password (After received email)
const resetpassword = async (req, res, next) => {
    const { password } = req.body
    if (req.query.resetpassword) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const resetpassword = await users.update(
            {
                password: hashedPassword
            },
            {
                where: {
                    id: req.query.resetpassword
                }
            }).catch((err) => console.log(err))
        if (resetpassword.length < 1) return res.send('Fail please try again later')
        next()
    }
    else return res.json('error')
}

// Update user account just owned account
const update = async (req, res, next) => {
    // Check data
    const { error } = authValidation.updateSchema(req.body)
    if (error) return console.log(error)

    const { userId, name, email, adress, phoneNum, password } = req.body

    // Update name
    if (userId && name) {
        const updateName = await users.update(
            {
                name: name
            },
            {
                where: {
                    id: userId
                }
            }
        ).catch((err) => console.log(err))
        console.log('Name updated');
        next()
    }

    // Update email
    if (userId && email) {
        const updateEmail = await users.update(
            {
                email: email
            },
            {
                where: {
                    id: userId
                }
            }
        ).catch((err) => console.log(err))
        console.log('Email updated');
        next()
    }

    // Update user address
    if (userId && adress) {
        const updateAdress = await users.update(
            {
                adress: adress
            },
            {
                where: {
                    id: userId
                }
            }
        ).catch((err) => console.log(err))
        console.log('Adress updated');
        next()
    }

    // Update user phoneNum
    if (userId && phoneNum) {
        const updatePhonenum = await users.update(
            {
                phoneNum: phoneNum
            },
            {
                where: {
                    id: userId
                }
            }
        ).catch((err) => console.log(err))
        console.log('Phone number updated');
        next()
    }

    // Update user password
    if (userId && password) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        await users.update(
            {
                password: hashedPassword
            },
            {
                where: {
                    id: userId
                }
            }).catch((err) => console.log(err))
        console.log('Password updated');
        next()
    }
}

// Delete user account
const deleteuser = async (req, res, next) => {
    try {const detroy = await users.destroy({ where: { id: req.body.id } }).catch((err) => console.log(err))
    if (detroy < 1)
        return console.log('User not exsits')
    next()}
    catch(err){
        return console.log(err)
    }
}

module.exports = {
    login,
    register,
    logout,
    verify,
    forgotpassword,
    resetpassword,
    update,
    deleteuser
}