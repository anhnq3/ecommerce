// const db = require('../../config/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { session } = require('../../models')
const { users } = require('../../models')
const authValidation = require('./authValidation')

var sessionId

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
        user_password = user[0].password
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

                const result2 = await session.findAll({
                    where: {
                        userId: user.id
                    }
                }).catch(err => console.log(err))

                sessionId = result2[0].id
                console.log('________________________________')
                console.log('sessionId: ', sessionId)
                console.log('Remember to logout')
                console.log('________________________________')

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

                const result2 = await session.findAll({
                    where: {
                        userId: user.id
                    }
                }).catch(err => console.log(err))

                sessionId = result2[0].id
                console.log('________________________________')
                console.log('sessionId: ', sessionId)
                console.log('Remember to logout')
                console.log('________________________________')

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

                const result2 = await session.findAll({
                    where: {
                        userId: user.id
                    }
                }).catch(err => console.log(err))

                sessionId = result2[0].id
                console.log('________________________________')
                console.log('sessionId: ', sessionId)
                console.log('Remember to logout')
                console.log('________________________________')

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
    if (error) return console.log(error)

    const { username, email, phoneNum, password, adress, role, checkVerify } = req.body

    const registfind = await users.findAll({
        where: {
            username: username
        }
    }).catch(err => console.log(err))
    if (registfind.length < 1) {
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
        res.send('inserted')
    }
    else return res.send('This username/ email/ phone number has been registed')
}

const logout = async (req, res, next) => {
    const detroy = await session.destroy({ where: { id: req.body.id } }).catch((err) => console.log(err))
    if (detroy < 1) return console.log('________________________________\nLogout wrong session Id please logout again\n________________________________')
    next()
}

const verify = async (req, res, next) => {
    next()
}
module.exports = {
    login,
    register,
    logout,
    verify
}

// // By usermame
// if (username && password) {
//     try {
//         db.query(`select password from users where username ='${username}'`, async (error, results) => {
//             if (error) return res.send(error)
//             if (results.length > 0) {
//                 user_password = results[0].password
//                 const check = await bcrypt.compare(password, user_password)
//                 if (!check) {
//                     return res.send('Incorrect Username and/or Password!')
//                 }
//                 if (check) {
//                     db.query(`select _ from users where username ='${username}'`, async (error2, results2, fields) => {
//                         if (error2) return res.send(error2)
//                         if (results2.length > 0) {
//                             user = results2[0]
//                             const token = jwt.sign(
//                                 {
//                                     "username": user.username,
//                                     "email": user.email,
//                                     "adress": user.adress,
//                                     "phoneNum": user.phoneNum,
//                                     "role": user.role,
//                                     "checkVerify": user.checkVerify
//                                 },
//                                 process.env.JWT_SECRET,
//                                 {
//                                     expiresIn: "1h"
//                                 }
//                             )
//                             db.query(`INSERT INTO \`session\` (\`sessionId\`, \`userId\`, \`jwt\`, \`refreshToken\`) VALUES (NULL, '${user.userId}', '${token}', '')`, async(error3, results3) => {
//                                 if(error3) return res.send(error3)
//                             })

//                             db.query(`SELECT sessionId from session where userId = ${user.userId}`, (error4, results4) => {
//                                 if(error4) return res.send(error3)
//                                 sessionId = results4[0].sessionId
//                                 console.log('sessionId: ', sessionId)
//                                 console.log('Remember to logout')
//                             })

//                             return res.status(200).json({
//                                 message: "Auth successful",
//                                 token: token
//                             })
//                             next()
//                         }
//                         else {
//                             return res.send('Incorrect Username and/or Password!');
//                         }
//                     })
//                 }
//             }
//             else {
//                 return res.send('Incorrect Username and/or Password!');
//             }
//         })
//     }
//     catch (err) {
//         res.send(err)
//     }

// }

// // By email
// if (email && password) {
//     try {
//         db.query(`select password from users where email ='${email}'`, async (error, results) => {
//             if (error) return res.send(error)
//             if (results.length > 0) {
//                 user_password = results[0].password
//                 const check = await bcrypt.compare(password, user_password)
//                 if (!check) {
//                     return res.send('Incorrect Username and/or Password!')
//                 }
//                 if (check) {
//                     db.query(`select _ from users where email ='${email}'`, (error2, results2, fields) => {
//                         if (error2) return res.send(error2)
//                         if (results2.length > 0) {
//                             user = results2[0]
//                             const token = jwt.sign(
//                                 {
//                                     "username": user.username,
//                                     "email": user.email,
//                                     "adress": user.adress,
//                                     "phoneNum": user.phoneNum,
//                                     "role": user.role,
//                                     "checkVerify": user.checkVerify
//                                 },
//                                 process.env.JWT_SECRET,
//                                 {
//                                     expiresIn: "1h"
//                                 }
//                             )
//                             db.query(`INSERT INTO \`session\` (\`sessionId\`, \`userId\`, \`jwt\`, \`refreshToken\`) VALUES (NULL, '${user.userId}', '${token}', '')`, async(error3, results3) => {
//                                 if(error3) return res.send(error3)
//                             })

//                             db.query(`SELECT sessionId from session where userId = ${user.userId}`, (error4, results4) => {
//                                 if(error4) return res.send(error3)
//                                 sessionId = results4[0].sessionId
//                                 console.log('sessionId: ', sessionId)
//                                 console.log('Remember to logout')

//                             })


//                             return res.status(200).json({
//                                 message: "Auth successful",
//                                 token: token
//                             })
//                             next()
//                         }
//                         else {
//                             return res.send('Incorrect Username and/or Password!');
//                         }
//                     })
//                 }

//             }
//             else {
//                 return res.send('Incorrect Username and/or Password!');
//             }
//         })
//     }
//     catch (err) {
//         res.send(err)
//     }
// }

// // By phonenum
// if (phoneNum && password) {
//     try {
//         db.query(`select password from users where phoneNum ='${phoneNum}'`, async (error, results) => {
//             if (error) return res.send(error)
//             if (results.length > 0) {
//                 user_password = results[0].password
//                 const check = await bcrypt.compare(password, user_password)
//                 if (!check) {
//                     return res.send('Incorrect Username and/or Password!')
//                 }
//                 if (check) {
//                     db.query(`select _ from users where phoneNum ='${phoneNum}'`, async (error2, results2, fields) => {
//                         if (error2) return res.send(error2)
//                         if (results2.length > 0) {
//                             user = results2[0]
//                             const token = jwt.sign(
//                                 {
//                                     "username": user.username,
//                                     "email": user.email,
//                                     "adress": user.adress,
//                                     "phoneNum": user.phoneNum,
//                                     "role": user.role,
//                                     "checkVerify": user.checkVerify
//                                 },
//                                 process.env.JWT_SECRET,
//                                 {
//                                     expiresIn: "1h"
//                                 }
//                             )
//                             db.query(`INSERT INTO \`session\` (\`sessionId\`, \`userId\`, \`jwt\`, \`refreshToken\`) VALUES (NULL, '${user.userId}', '${token}', '')`, async(error3, results3) => {
//                                 if(error3) return res.send(error3)
//                             })

//                             db.query(`SELECT sessionId from session where userId = ${user.userId}`, (error4, results4) => {
//                                 if(error4) return res.send(error3)
//                                 sessionId = results4[0].sessionId
//                                 console.log('sessionId: ', sessionId)
//                                 console.log('Remember to logout')
//                             })

//                             return res.status(200).json({
//                                 message: "Auth successful",
//                                 token: token
//                             })
//                             next()
//                         }
//                         else {
//                             return res.send('Incorrect Username and/or Password!');
//                         }
//                     })
//                 }

//             }
//             else {
//                 return res.send('Incorrect Username and/or Password!');
//             }
//         })
//     }
//     catch (err) {
//         res.send(err)
//     }
// }

// // Register
// const register = async (req, res, next) => {
//     db.query(`select _ from users where username = '${req.body.username}' or phoneNum = '${req.body.phoneNum}' OR email = '${req.body.email}';`, async (err, result) => {
//         if (err) return res.send(err)
//         if (result.length > 0) res.send('This username have already been taken')
//         else {
//             try {
//                 const { error } = authValidation.registerSchema(req.body)

//                 if (error) return res.send(error)

//                 const salt = await bcrypt.genSalt(10)
//                 const hashedPassword = await bcrypt.hash(req.body.password, salt)

//                 var user = req.body

//                 db.query(`INSERT INTO \`users\` (\`userId\`, \`username\`, \`email\`, \`password\`, \`adress\`, \`phoneNum\`, \`role\`, \`checkVerify\`) VALUES (NULL, '${req.body.username}', '${req.body.email}', '${hashedPassword}', '${req.body.adress}', '${req.body.phoneNum}', '${req.body.role}', '${req.body.checkVerify}')`, (err, result) => {
//                     if (err) return res.send(err)
//                     console.log(user)
//                     next()
//                 })
//             }
//             catch (err) {
//                 console.log(err)
//                 res.send('Save user failed')
//             }
//         }
//     })
// }