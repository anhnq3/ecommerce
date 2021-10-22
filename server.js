require('dotenv').config()
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const PORT = process.env.PORT
app.use(express.json())
app.use(cookieParser())

// Process of body sending
app.use(express.urlencoded())

const swaggerOption = {
    swaggerDefinition: {
        info: {
            title: 'Quanganh\'s ecommerce',
            version: '1.0.0'
        }
    },
    apis: ['swagger.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOption)
// console.log(swaggerDocs)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Products

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
const { totalmem } = require('os')
app.use(voucherRouter)

db.sequelize.sync().then((req) => {
    app.listen(PORT, () => console.log(`Running on port: ${PORT}`))
})

