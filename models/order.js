module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('order', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            },
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        orderquantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        vouchercode: {
            type: DataTypes.STRING
        },
        ordertotalprice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },

        { freezeTableName: true })

        Order.associate = models => {
            Order.hasOne(models.user, {
                onDelete: "cascade"
            })
        }

    Order.associate = model => {
        Order.hasOne(model.ordermain, {
            onDelete: "cascade"
        })
    }

    

    // Order.associate = models => {
    //     Order.belongsTo(models.products, {
    //         foreignkey: {
    //             allowNull: false
    //         }
    //     })
    // }

    return Order
}