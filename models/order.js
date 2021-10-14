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
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        orderquantity: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ordertotalprice: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },

        { freezeTableName: true })

    Order.associate = model => {
        Order.hasOne(model.ordermain, {
            primaryKey: {
                allowNull: false
            }
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