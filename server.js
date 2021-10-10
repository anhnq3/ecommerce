require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
require('body-parser')

const PORT = process.env.PORT
const publicDirectory = path.join(__dirname, './public')

app.use(express.json())
app.use(express.static(publicDirectory))

const db = require('./models')


db.sequelize.sync().then((req) => {
    app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
})

// Auth Router
const authRouter = require('./src/auth/authAPI')
app.use(authRouter)

// Admin Router
const adminRouter = require('./src/admin/adminAPI')
app.use(adminRouter)