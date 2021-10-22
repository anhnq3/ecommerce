// Swagger

// Admin
{
    /**
     * @swagger
     * tags:
     *  name: Admin
     *  description: Admin managing API
     * 
     * /admin:
     *  post:
     *      tags: [Admin]
     *      description: Login Admin
     *      parameters:
     *      - name: username
     *        in: formData
     *        type: string
     *        required: true
     * 
     *      - name: password
     *        in: formData
     *        type: string
     *        required: true
     * 
     *      responses:
     *          200:
     *              description: success
     * 
     * /admin/adduser:
     *  post:
     *      tags: [Admin]
     *      description: Add new admin
     *      parameters:
     *      - name: username
     *        in: formData
     *        type: string
     *        required: true
     * 
     *      - name: password
     *        in: formData
     *        type: string
     *        required: true
     * 
     *      - name: role
     *        in: formData
     *        type: string
     *        required: true
     *        enum: [admin, manager]
     * 
     *      responses:
     *          200:
     *              description: success
     * 
     * /admin/deleteadmin:
     *  delete:
     *      tags: [Admin]
     *      description: Delete a admin
     *      parameters:
     *      - name: username
     *        in: formData
     *        required: true
     * 
     *      responses:
     *          200:
     *              description: success
     * 
     * /admin/roleset:
     *  post:
     *      tags: [Admin]
     *      description: Change role for admin
     *      parameters:
     *      - name: username
     *        in: formData
     *        type: string
     *        required: true
     * 
     *      - name: role
     *        in: formData
     *        type: string
     *        required: true
     *        enum: [admin, manager]
     * 
     *      responses:
     *          200:
     *              description: success
     * 
     * /admin/passchange:
     *  post:
     *      tags: [Admin]
     *      descripiton: Change pass of user
     *      parameters:
     *      - name: id
     *        in: formData
     *        type: integer
     *        required: true
     * 
     *      - name: password
     *        in: formData
     *        type: string
     *        required: true
     * 
     *      responses:
     *          200:
     *              description: success
     */
}

// Login
{
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
     *          type: string
     * 
     *      -   name: email
     *          in: formData
     *          type: string
     * 
     *      -   name: phoneNum
     *          in: formData
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
     *       
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

// Category
{
    /**
     * @swagger
     *  tags:
     *  name: Category
     *  description: The auth managing API
     * 
     * /category:
     *  get:
     *      tags: [Category]
     *      description: Get all category
     *      responses:
     *          200:
     *              description: Success
     * 
     * /category/addcategory:
     *  post:
     *      tags: [Category]
     *      description: Add a new category
     *      parameters:
     *      -   name: categoryname
     *          description: Insert new category name
     *          in: formData
     *          required: true
     *          type: string
     *      responses:
     *          201:
     *              description: Created
     *
     * /category/deletecategory:
     *  delete:
     *      tags: [Category] 
     *      description: Delete a category
     *      
     *      parameters:
     *      - name: categoryname
     *        description: Insert category name you need to delete
     *        in: formData
     *        required: true
     *        type: string
     *      responses:
     *          201:
     *              description: Deleted
     *          404:
     *              description: Error
     * 
     * /category/updatecategory:
     *  post:
     *      tags: [Category]
     *      description: Edit a category
     *      parameters:
     *      - name: categoryname
     *        description: Insert category name you want to change
     *        in: formData
     *        required: true
     *        type: string
     *      - name: newcategoryname
     *        description: Insert new category name you want to change
     *        in: formData
     *        required: true
     *        type: string
     *      responses:
     *          200:
     *              description: Updated
     */
}

//Products
{
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

// Flash sale
{
    /**
     * @swagger
     * tags:
     *  name: Flash sale
     *  description: The flash sale managing API
     * 
     * /flashsale:
     *  get:
     *      tags: [Flash sale]
     *      description: Get all flash sale
     *      responses:
     *          200: 
     *              description: Success
     * 
     * /flashsale/addflashsale:
     *  post:
     *      tags: [Flash sale]
     *      description: Add a new flash sale
     *      parameters:
     *      - name: flashsalename
     *        description: Insert new flash sale name
     *        in: formData
     *        required: true
     *        type: string
     *
     *      - name: flashsalediscount
     *        description: Insert new flash sale discount
     *        in: formData
     *        required: true
     *        type: string
     *
     *      - name: flashsalestartdate
     *        description: Insert new flash sale start date
     *        in: formData
     *        required: true
     *        type: string
     *
     *      - name: flashsaleenddate
     *        description: Insert new flash sale end date
     *        in: formData
     *        required: true
     *        type: string
     *
     *      - name: flashsalestatus
     *        description: Select status of new flash sale
     *        in: formData
     *        required: true
     *        type: string
     *        enum: [active, inactive]
     *
     *      - name: flashsalequantity
     *        description: Insert quantity of flash sale
     *        in: formData
     *        required: true
     *        type: integer
     *
     *      - name: code
     *        description: Insert new flash sale code
     *        in: formData
     *        required: true
     *        type: string
     *      responses:
     *          200:
     *              description: Added
     * 
     * /flashsale/deleteflashsale:
     *  delete:
     *      tags: [Flash sale]
     *      description: Delete existing flash sale
     *      parameters:
     *      - name: flashsalename
     *        description: insert new flash sale name you want to delete
     *        in: formData
     *        required: true
     *        type: string
     *      responses:
     *          201:
     *              description: Deleted
     *          404:
     *              description: Error
     * /flashsale/update:
     *  post:
     *      tags: [Flash sale]
     *      description: Edit existing flash sale
     *      parameters:
     *      - name: flashsalename
     *        description: Insert new flash sale name
     *        in: formData
     *        required: true
     *        type: string
     * 
     *      - name: flashsalediscount
     *        description: Insert new flash sale discount
     *        in: formData
     *        type: integer
     * 
     *      - name: flashsalestartdate
     *        description: Insert new flash sale start date
     *        in: formData
     *        type: string
     * 
     *      - name: flashsaleenddate
     *        description: Insert new flash sale end date
     *        in: formData
     *        type: string
     * 
     *      - name: flashsalestatus
     *        description: Insert new flash sale status
     *        in: formData
     *        type: string
     *        enum: [active, inactive]
     * 
     *      - name: flashsalequantity
     *        description: Insert new flash sale quantity
     *        in: formData
     *        type: string
     * 
     *      - name: code
     *        description: Insert new flash sale code
     *        in: formData
     *        type: string
     * 
     *      responses:
     *          200:
     *              description: edit success
     *          400:
     *              description: edit fail
     * 
     */
}

// Order
{
    /**
     * @swagger
     * tags:
     *  name: Order
     *  description: Order managing API
     *  
     * /order:
     *  get:
     *      tags: [Order]
     *      description: Get all order
     *      responses:
     *          200:
     *              description: success
     * 
     * /order/addorder:
     *  post:
     *      tags: [Order]
     *      description: Add a new order
     *      parameters: 
     *       - name: userId
     *         description: Insert userId
     *         in: formData
     *         type: integer
     * 
     *       - name: productId
     *         description: Insert productId
     *         in: formData
     *         type: integer
     * 
     *       - name: orderquantity
     *         description: Insert order quantity
     *         in: formData
     *         type: integer
     *      responses:
     *          200:
     *              description: Success
     * 
     * /deleteorder:
     *  delete:
     *      tags: [Order]
     *      description: Delete an order
     *      parameters:
     *      - name: productId
     *        description: Insert product Id need to delete
     *        in: formData
     *        type: integer
     *      responses:
     *          200:
     *              description: Success
     * 
     * /order/updateorder:
     *  post:
     *      tags: [Order]
     *      description: Update an order
     *      parameters:
     *      - name: productId
     *        decription: insert product id
     *        in: formData
     *        type: integer
     * 
     *      - name: orderquantity
     *        decription: insert order quantity
     *        in: formData
     *        type: integer
     *      responses:
     *          200:
     *              description: success
     */
}

//Order main
{
    /**
     * @swagger
     * tags:
     *  name: Order main
     *  description: Order main managing API
     * /ordermain:
     *  get:
     *      tags: [Order main]
     *      description: Get all ordermain 
     *      responses:
     *          200:
     *              description: success
     * 
     * /addordermain:
     *  post:
     *      tags: [Order main]
     *      description: Add an ordermain
     *      parameters:
     *      - name: userId
     *        description: 
     *        in: formData
     *        type: integer
     *        required: true
     * 
     *      - name: flashsaleId
     *        description: 
     *        in: formData
     *        type: integer
     *        required: true 
     *      responses:
     *          200:
     *              description: success
     */
}

// Products attributes
{
    /**
     * @swagger
     * tags:
     *  name: Product attributes
     *  description: Product attributes managing API
     * 
     * /productattributes:
     *  get:
     *      tags: [Product attributes]
     *      description: Get all product attributes
     *      responses:
     *          200:
     *              description: success
     * 
     * /productattributes/addproductattributes:
     *  post:
     *      tags: [Product attributes]
     *      description: Add new product attributes
     *      parameters:
     *      - name: productId
     *        description: 
     *        in: formData
     *        type: integer
     *        required: true
     * 
     *      - name: color
     *        description: 
     *        in: formData
     *        type: string
     *        required: true
     * 
     *      - name: type
     *        description: 
     *        in: formData
     *        type: string
     *        required: true  
     *      responses:
     *          200:
     *              description: success
     * /productattributes/deleteproductattributes:
     *  delete:
     *      tags: [Product attributes]
     *      description: Delete a product attributes
     *      parameters:
     *      - name: productId
     *        in: formData
     *        type: integer
     *        required: true  
     *      responses:
     *          200:
     *              description: success
     *        
     * /productattributes/updateproductattributes:
     *  post:
     *      tags: [Product attributes]
     *      description: Edit a product attributes
     *      parameters:
     *      - name: productId
     *        in: formData
     *        type: integer
     *        required: true
     *
     *      - name: color
     *        in: formData
     *        type: string
     *        required: true
     *
     *      - name: type
     *        in: formData
     *        type: string
     *        required: true
     *      responses:
     *          200:
     *              description: success
     *  
     */
}

// Voucher
{
    /**
     * @swagger
     * tags:
     *  name: Voucher
     *  description: Voucher managing API
     * 
     * /voucher:
     *  get:
     *      tags: [Voucher]
     *      description: Get all voucher
     *      responses:
     *          200:
     *              description: success
     * 
     * /voucher/addvoucher:
     *  post:
     *      tags: [Voucher]
     *      description: Add new voucher
     *      parameters:
     *      - name: productId
     *        in: formData
     *        type: string
     * 
     *      - name: voucherdiscount
     *        in: formData
     *        type: string
     * 
     *      - name: vouchername
     *        in: formData
     *        type: string
     * 
     *      - name: voucherstartdate
     *        in: formData
     *        type: string
     * 
     *      - name: voucherenddate
     *        in: formData
     *        type: string
     * 
     *      - name: voucherstatus
     *        in: formData
     *        type: string
     *        enum: [active, inactive]
     * 
     *      - name: voucherquantity
     *        in: formData
     *        type: string
     * 
     *      - name: code
     *        in: formData
     *        type: string
     *      responses:
     *          200:
     *              description: success
     * 
     * /voucher/deletevoucher:
     *  delete:
     *      tags: [Voucher]
     *      description: Delete a voucher
     *      parameters:
     *      - name: code
     *        required: true
     *        type: string
     *        in: formData
     *      responses:
     *          200:
     *              description: success
     * 
     * /voucher/updatevoucher:
     *  post:
     *      tags: [Voucher]
     *      description: Update voucher
     *      parameters:
     *      - name: id
     *        required: true
     *        type: string
     *        in: formData
     * 
     *      - name: productId
     *        type: string
     *        in: formData
     * 
     *      - name: voucherdiscount
     *        type: string
     *        in: formData
     * 
     *      - name: vouchername
     *        type: string
     *        in: formData
     * 
     *      - name: voucherstartdate
     *        type: string
     *        in: formData
     * 
     *      - name: voucherenddate
     *        type: string
     *        in: formData
     * 
     *      - name: voucherstatus
     *        type: string
     *        in: formData
     * 
     *      - name: voucherquantity
     *        type: string
     *        in: formData
     * 
     *      - name: code
     *        type: string
     *        in: formData
     * 
     *      responses:
     *          200:
     *              description: success
     */
}