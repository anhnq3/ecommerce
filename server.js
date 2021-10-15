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

// Auth Router
const authRouter = require('./src/auth/authAPI')
app.use(authRouter)

// Admin Router
const adminRouter = require('./src/admin/adminAPI')
app.use(adminRouter)

// Category Router
const categoryRouter = require('./src/category/categoryAPI')
app.use(categoryRouter) 

// Flash sale Router
const flashsaleRouter = require('./src/flashsale/flashsaleAPI')
app.use(flashsaleRouter)

// Order Router
const orderRouter = require('./src/order/orderAPI')
app.use(orderRouter)

// Products Router
const productRouter = require('./src/products/productsAPI')
app.use(productRouter)

// Ordermain Router
const ordermainRouter = require('./src/ordermain/ordermainAPI')
app.use(ordermainRouter)

// Productattributes Router
const productattributesRouter = require('./src/productattributes/productattributesAPI')
app.use(productattributesRouter)

// voucher Router
const voucherRouter = require('./src/voucher/voucherAPI')
app.use(voucherRouter)

db.sequelize.sync().then((req) => {
    app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
})

