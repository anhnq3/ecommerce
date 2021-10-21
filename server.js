require('dotenv').config()
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
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
    apis: ['server.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOption)
// console.log(swaggerDocs)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

// Products
const swagger_products = {
    // Swagger
    
    /**
     * @swagger
     * tags:
     *  name: Products
     *  description: The products managing API
     * 
     * /products:
     *  get:
     *      tags: [Products]
     *      description: Get all products
     *      responses:
     *          200:
     *              description: Success
     * /products/deleteproducts/{id}:
     *  delete:
     *      tags: [Products]
     *      description: Delete product by id
     *      parameters:
     *      -   name: id
     *          description: id product need to delete
     *          in: path
     *          required: true
     *          type: integer
     *      responses:
     *          200:
     *              description: Success
     *          404:
     *              description: Error
     * /products/addproducts:
     *  post:
     *      tags: [Products]
     *      description: Add a product
     *      parameters:
     *      -   name: categoryId
     *          description: categoryId of the product
     *          in: formData
     *          required: true
     *          type: integer
     * 
     *      -   name: productname
     *          description: productname of the product
     *          in: formData
     *          required: true
     *          type: string
     * 
     *      -   name: barcode
     *          description: barcode of the product
     *          in: formData
     *          required: true
     *          type: integer
     * 
     *      -   name: importprice
     *          description: importprice of the product
     *          in: formData
     *          required: true
     *          type: integer
     * 
     *      -   name: sellingprice
     *          description: sellingprice of the product
     *          in: formData
     *          required: true
     *          type: integer
     * 
     *      -   name: weight
     *          description: weight of the product
     *          in: formData
     *          required: true
     *          type: integer
     * 
     *      -   name: mainimg
     *          description: mainimg of the product
     *          in: formData
     *          required: true
     *          type: string
     * 
     *      -   name: imgs
     *          description: imgs of the product
     *          in: formData
     *          required: true
     *          type: string
     * 
     *      -   name: quantity
     *          description: quantity of the product
     *          in: formData
     *          required: true
     *          type: integer
     * 
     *      -   name: description
     *          description: description of the product
     *          in: formData
     *          required: true
     *          type: string
     *      
     *      responses:
     *          201:
     *              description: Created
     * /products/updateproducts:
     *  post:
     *      tags: [Products]
     *      description: Update product
     * 
     *      parameters:
     *      -   name: id
     *          description: id of the product
     *          in: formData
     *          type: integer
     * 
     *      -   name: categoryId
     *          description: categoryId of the product
     *          in: formData
     *          type: integer
     * 
     *      -   name: productname
     *          description: productname of the product
     *          in: formData
     *          type: string
     * 
     *      -   name: barcode
     *          description: barcode of the product
     *          in: formData
     *          type: integer
     * 
     *      -   name: importprice
     *          description: importprice of the product
     *          in: formData
     *          type: integer
     * 
     *      -   name: sellingprice
     *          description: sellingprice of the product
     *          in: formData
     *          type: integer
     * 
     *      -   name: weight
     *          description: weight of the product
     *          in: formData
     *          type: integer
     * 
     *      -   name: mainimg
     *          description: mainimg of the product
     *          in: formData
     *          type: string
     * 
     *      -   name: imgs
     *          description: imgs of the product
     *          in: formData
     *          type: string
     * 
     *      -   name: quantity
     *          description: quantity of the product
     *          in: formData
     *          type: integer
     * 
     *      -   name: description
     *          description: description of the product
     *          in: formData
     *          type: string
     * 
     *      responses:
     *          201:
     *              description: Updated
    */
}

const swagger_auth = {
    // Login
    /**
     * @swagger
     * tags:
     *  name: Auth
     *  description: The auth managing API
    *
     * /login:
     *  post:
     *      tags: [Auth]
     *      description: Login to your account
     *      parameters:
     *      -   name: username
     *          description: Insert your username
     *          in: formData
     *          required: true
     *          type: string
    *
     *      -   name: password
     *          description: Insert your password
     *          in: formData
     *          required: true
     *          type: string
     *      
     *      responses:
     *          201:
     *              description: Created
     * /user/register:
     *   post:
     *       tags: [Auth]
     *       description: Register a account
     *       parameters:
     *       -   name: username
     *           description: Insert your username
     *           in: formData
     *           required: true
     *           type: string
     * 
     *       -   name: name
     *           description: Insert your full name
     *           in: formData
     *           type: string
     * 
     *       -   name: email
     *           description: Insert your email
     *           in: formData
     *           required: true
     *           type: string
     *           format: email
     * 
     *       -   name: phoneNum
     *           description: Insert your phone number
     *           in: formData
     *           required: true
     *           type: integer
     * 
     *       -   name: password
     *           description: Insert your password
     *           in: formData
     *           required: true
     *           type: string
     * 
     *       -   name: adress
     *           description: Insert your adress
     *           in: formData
     *           required: true
     *           type: string
     *       responses:
     *          201:
     *              description: Created
     * 
     * 
     * /user/logout:
     *   delete:
     *       tags: [Auth]
     *       description: Logout account
     *       parameters:
     *       -   name: id
     *           description: This id take from cookie
     *           in: formData
     *           required: true
     *           type: integer
     *       responses:
     *          200:
     *              description: Logged out
     * 
     * /user/forgot:
     *   post:
     *       tags: [Auth]
     *       description: Forgot password
     *       parameters:
     *       -   name: email
     *           description: Insert your email
     *           in: formData
     *           required: true
     *           type: string
     *       responses:
     *           200:
     *               description: Email has sent
     * 
     * /user/resetpassword?resetpassword={id} :
     *  post:
     *      tags: [Auth]
     *      description: Reset password after received email
     *      parameters:
     *      -   name: id
     *          description: id user to reset
     *          in: path
     *          required: true
     *          type: integer
     *      
     *      -   name: password
     *          description: password after reset
     *          in: formData
     *          required: true
     *          type: string
     * 
     *      responses:
     *          200:
     *              description: Success
     *          404:
     *              description: Error
     * /user/delete/{id}:
     *  delete:
     *      tags: [Auth]
     *      description: Delete user by id
     *      parameters:
     *      -   name: id
     *          description: id user need to delete
     *          in: path
     *          required: true
     *          type: integer
     *      responses:
     *          200:
     *              description: Success
     *          404:
     *              description: Error
     * /user/update:
     *   post:
     *       tags: [Auth]
     *       description: Update user password by id with each userId and orther
     *       parameters:
     *       -   name: userId
     *           description: user id need to update
     *           in: formData
     *           type: integer
     * 
     *       -   name: name
     *           description: update name
     *           in: formData
     *           type: string
     *
     *       -   name: adress
     *           description: update adress
     *           in: formData
     *           type: string
     * 
     *       -   name: email
     *           description: update email
     *           in: formData
     *           type: string
     * 
     *       -   name: phoneNum
     *           description: update phone numner
     *           in: formData
     *           type: string
     * 
     *       -   name: password
     *           description: update phone password
     *           in: formData
     *           type: string
     *       responses:
     *          200:
     *              description: Success
     *          404:
     *              description: Error
     * 
     * /user/verify?id={id} :
     *  get:
     *      tags: [Auth]
     *      description: Reset password after received email
     *      parameters:
     *      -   name: id
     *          description: id user to reset
     *          in: path
     *          required: true
     *          type: integer
     * 
     *      responses:
     *          200:
     *              description: Success
     *          404:
     *              description: Error
     */
}


// handlebars config
// app.set('view engine', 'handlebars')
app.set('view engine', 'hbs')

app.engine('hbs', handlebars({
    // replace hbs for handlebars
    extname: 'hbs',
}))

app.use(express.static('public'))
app.use(express.static("public/img"));

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

