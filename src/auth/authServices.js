const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { session } = require('../models')
const { users } = require('../models')
const authValidation = require('./authValidation')
const nodemailer = require('nodemailer')
const cookieParser = require('cookie-parser')
const e = require('express')

var sessionId_cookie

// Using email with this
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD
    }
})

// Login
const login = async (req, res) => {
    const { username, email, phoneNum, password } = req.body

    if (username === '' || password === '') {
        return res.json('username/password is empty')
        // return res.render('login')
    }
    else {
        // By usermame
        if (username && password) {
            await users.findOne({
                where: {
                    username: username
                }
            }).catch(err => res.json(err))
                .then(async (finduser) => {
                    if (finduser) {
                        const user_password = finduser.password
                        const check = await bcrypt.compare(password, user_password)
                        if (!check) {
                            return res.json('Incorrect Username or Password!')
                            // return res.render('login', { alert: 'You have enter the worng user or password please re-enter' })
                        }
                        if (check) {
                            await users.findOne({
                                where: {
                                    username: username
                                }
                            }).catch(err => res.json(err))
                                .then(async (checked) => {
                                    if (checked) {
                                        const user = checked
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

                                        await session.findOne({
                                            where: {
                                                userId: user.id
                                            }
                                        }).catch(err => console.log(err))
                                            .then((result) => {
                                                if (result) {
                                                    sessionId_cookie = result.id
                                                    // console.log('sessionId_cookie: ', sessionId_cookie)
                                                    console.log('Remember to logout')

                                                    res.cookie('login_user_id', user.id)
                                                }
                                                return res.status(200).json({
                                                    message: "Auth successful",
                                                    sessionId: sessionId_cookie,
                                                    token: token
                                                })
                                            })
                                    }
                                    else {
                                        return res.json('Incorrect Username and/or Password!')
                                    }
                                })
                        }
                    }
                    else {
                        return res.json('Incorrect Username or Password!')
                        // return res.render('login', { alert: 'You have enter the worng user or password please re-enter' })
                    }
                })
        }

        // By email
        if (email && password) {
            await users.findOne({
                where: {
                    email: email
                }
            }).catch(err => res.json(err))
                .then(async (finduser) => {
                    if (finduser) {
                        const user_password = finduser.password
                        const check = await bcrypt.compare(password, user_password)
                        if (!check) {
                            return res.json('Incorrect Email or Password!')
                            // return res.render('login', { alert: 'You have enter the worng user or password please re-enter' })
                        }
                        if (check) {
                            await users.findOne({
                                where: {
                                    email: email
                                }
                            }).catch(err => res.json(err))
                                .then(async (checked) => {
                                    if (checked) {
                                        const user = checked
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

                                        await session.findOne({
                                            where: {
                                                userId: user.id
                                            }
                                        }).catch(err => console.log(err))
                                            .then((result) => {
                                                if (result) {
                                                    sessionId_cookie = result.id
                                                    // console.log('sessionId_cookie: ', sessionId_cookie)
                                                    console.log('Remember to logout')

                                                    res.cookie('login_user_id', user.id)
                                                }
                                                return res.status(200).json({
                                                    message: "Auth successful",
                                                    sessionId: sessionId_cookie,
                                                    token: token
                                                })
                                            })
                                    }
                                    else {
                                        next()
                                    }
                                })
                        }
                    }
                    else {
                        return res.json('Incorrect Username or Password!')
                        // return res.render('login', { alert: 'You have enter the worng user or password please re-enter' })
                    }
                })
        }

        // By phonenum
        if (phoneNum && password) {
            await users.findOne({
                where: {
                    phoneNum: phoneNum
                }
            }).catch(err => res.json(err))
                .then(async (finduser) => {
                    if (finduser) {
                        const user_password = finduser.password
                        const check = await bcrypt.compare(password, user_password)
                        if (!check) {
                            return res.json('Incorrect phone number or Password!')
                            // return res.render('login', { alert: 'You have enter the worng user or password please re-enter' })
                        }
                        if (check) {
                            await users.findOne({
                                where: {
                                    phoneNum: phoneNum
                                }
                            }).catch(err => res.json(err))
                                .then(async (checked) => {
                                    if (checked) {
                                        const user = checked
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

                                        await session.findOne({
                                            where: {
                                                userId: user.id
                                            }
                                        }).catch(err => console.log(err))
                                            .then((result) => {
                                                if (result) {
                                                    sessionId_cookie = result.id
                                                    // console.log('sessionId_cookie: ', sessionId_cookie)
                                                    console.log('Remember to logout')

                                                    res.cookie('login_user_id', user.id)
                                                }
                                                return res.status(200).json({
                                                    message: "Auth successful",
                                                    sessionId: sessionId_cookie,
                                                    token: token
                                                })
                                            })
                                    }
                                    else {
                                        next()
                                    }
                                })
                        }
                    }
                    else {
                        return res.json('Incorrect Username or Password!')
                        // return res.render('login', { alert: 'You have enter the worng user or password please re-enter' })
                    }
                })
        }
    }
}

// Register
const register = async (req, res) => {
    // Joi check
    const { error } = authValidation.registerSchema(req.body)
    if (error) {
        console.log(error)
        return res.json('Validate failed')
    }
    else {
        const { name, username, email, phoneNum, password, adress, role, checkVerify } = req.body

        // Check username
        const usernameCheck = async () => {
            const registfind = await users.findAll({
                where: {
                    username: username
                }
            }).catch(err => console.log(err))

            if (registfind.length > 0) {
                return res.json('This username has been registed')
            }
            else {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)

                users.create({
                    name: name,
                    username: username,
                    email: email,
                    password: hashedPassword,
                    adress: adress,
                    phoneNum: phoneNum,
                    role: role,
                    checkVerify: checkVerify
                }).catch(err => console.log(err))

                    .then((add) => {
                        emailValidate(add.id)
                    })
                    return res.json('Registing done')
            }
        }

        // Check email
        const emailCheck = async () => {
            const registfind = await users.findAll({
                where: {
                    email: email
                }
            }).catch(err => console.log(err))

            if (registfind.length > 0) return res.json('This email has been registed')
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
                    return res.json('Registing done')
                
            }
        }

        // Check password
        const phoneNumCheck = async () => {
            const phoneNumFind = await users.findAll({
                where: {
                    phoneNum: phoneNum
                }
            }).catch(err => console.log(err))

            if (phoneNumFind.length > 0) return res.json('This phone number has been registed')
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
                return res.json('Registing done')
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
async function logout(req, res) {
    if (req.cookies.login_user_id) {
        // const detroy = await session.destroy({ where: { id: sessionId_cookie } }).catch((err) => console.log(err))
        // const detroy = await session.destroy({ where: { id: req.body.id } }).catch((err) => console.log(err))
        await session.destroy({ where: { userId: req.cookies.login_user_id } }).catch((err) => console.log(err))
            .then((result) => {
                if (result) {
                    res.clearCookie('login_user_id');
                    return res.json('Incorrect Username and/or Password!')
                }
                else
                    return res.json('You are already logged out')
            })
    }
    else {
        res.json('You hasn\'t login yet')
    }
    return res.json('Loged out')
}

// Verify after receive email
const verify = async (req, res) => {
    if (req.query.id) {
        const update_checkVerify = await users.update(
            {
                checkVerify: 'verified'
            },
            {
                where: { id: req.query.id }
            }).catch((err) => console.log(err))
        if (update_checkVerify.length > 0) res.json('Update success')
        else
            return res.json('Update success')
    }
    else {
        return res.json('error')
    }
}

// Forgot password(Get email)
const forgotpassword = async (req, res) => {
    const { email } = req.body
    // console.log('email: ', email)
    var forgotid
    const forgot = await users.findAll({
        where: {
            email: email
        }
    }).catch((err) => console.log(err))
        .then((user) => forgotid = user[0].id)

    if (forgot.length < 1) return res.json('Email doesn\'t exists!')
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
    return res.json('An restore password email have been sent to your email')
}

// Reset password (After received email)
const resetpassword = async (req, res) => {
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
        if (resetpassword.length < 1) return res.json('Fail please try again later')
        return res.json('Password has been reseted')
    }
    else return res.json('error')
}

// Update user account just owned account
const update = async (req, res) => {
    // Check data
    const { error } = authValidation.updateSchema(req.body)
    if (error) return console.log(error)

    const { userId, name, email, adress, phoneNum, password } = req.body

    if (userId) {
        // Update name
        if (userId && name) {
            await users.update(
                {
                    name: name
                },
                {
                    where: {
                        id: userId
                    }
                }
            ).catch((err) => console.log(err))
                .then((result) => {
                    if (result[0] === 1) {
                        console.log('Name updated');
                    }
                })
            // next()
        }

        // Update email
        if (userId && email) {
            await users.update(
                {
                    email: email
                },
                {
                    where: {
                        id: userId
                    }
                }
            ).catch((err) => console.log(err))
                .then((result1) => {
                    if (result1[0] === 1) {
                        console.log('Email updated');
                    }
                })
            // next()
        }

        // Update user address
        if (userId && adress) {
            await users.update(
                {
                    adress: adress
                },
                {
                    where: {
                        id: userId
                    }
                }
            ).catch((err) => console.log(err))
                .then((result2) => {
                    if (result2[0] === 1) {
                        console.log('Address updated')
                    }
                })
            // next()
        }

        // Update user phoneNum
        if (userId && phoneNum) {
            await users.update(
                {
                    phoneNum: phoneNum
                },
                {
                    where: {
                        id: userId
                    }
                }
            ).catch((err) => console.log(err))
                .then((result3) => {
                    if (result3[0] === 1) {
                        console.log('Phone number updated');
                    }
                })
            // next()
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
                .then((result4) => {
                    if (result4[0] === 1) {
                        console.log('Password updated');
                    }
                })
            // next()
        }
        return res.json('Your accoount has been updated')
    }

}

// Delete user account
const deleteuser = async (req, res) => {
    try {
        const detroy = await users.destroy({ where: { id: req.params.id } }).catch((err) => console.log(err))
        if (detroy < 1)
            return console.log('User not exsits')
        return res.json('Delete account completed')
    }
    catch (err) {
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