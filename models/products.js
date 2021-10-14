module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            },
            primaryKey: true
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        productname: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        barcode: {
            type: DataTypes.INTEGER(),
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            defaultValue: 0
        },
        importprice: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                notEmpty: true
            },
            defaultValue: 1000,
        },
        sellingprice: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                notEmpty: true
            },
            defaultValue: 1000,
        },
        weight: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                notEmpty: true
            },
            defaultValue: 1
        },
        mainimg: {
            type: DataTypes.STRING(),
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        imgs: {
            type: DataTypes.STRING(),
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        quantity: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                notEmpty: true
            },
            defaultValue: 1
        },
        description: {
            type: DataTypes.STRING(),
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
    })

    Products.associate = models => {
        Products.hasOne(models.productattribute, {
            onDelete: "cascade"
        })
    }
    Products.associate = models => {
        Products.hasMany(models.voucher, {
            onDelete: "cascade"
        })
    }
    Products.associate = models => {
        Products.hasMany(models.order, {
            onDelete: "cascade"
        })
    }
    // Products.associate = models => {
    //     Products.belongsTo(models.category, {
    //         foreignkey: {
    //             allowNull: false
    //         }
    //     })
    // }

    return Products
}