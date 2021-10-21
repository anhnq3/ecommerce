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

/**
 * @swagger
 *  tags:
 *  name: Category
 *  description: The auth managing API
 * 
 * /category:
 *  get:
 *      tags: [Category]
 *      description: get all category
 *      responses:
 *          200:
 *              description: Success
 */