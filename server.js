require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')

const db = require('./config/db')

app.use(express.json())
db

const PORT = process.env.PORT
const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    var sql = 'SELECT * FROM USERS'
    var query = db.query(sql, (err, result) => {
        if (err) return res.send(err)
        // console.log(result[0].checkVerify)
        res.send(result)
    })
})

const authRouter = require('./src/auth/authAPI')
app.use(authRouter)

app.listen(PORT, () => console.log(`Running on port: ${PORT}`))

console.log('edit')