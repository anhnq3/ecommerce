module.exports = (sequelize, DataTypes) => {
    const Voucher = sequelize.define('voucher', {
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
            validate: {
                notEmpty: true
            }
        },
        voucherdiscount: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        vouchername: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        voucherstartdate: {
            type: DataTypes.DATE(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        voucherenddate: {
            type: DataTypes.DATE(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        voucherstatus: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'inactive',
            validate: {
                notEmpty: true
            }
        },
        voucherquantity: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        code: {
            type: DataTypes.STRING(),
            allowNull:false,
            unique:true,
            validate: {
                notEmpty: true
            }
        }
    },
    {freezeTableName: true})

    // Voucher.associate = models => {
    //     Voucher.belongsTo(models.products, {
    //         foreignkey: {
    //             allowNull: false
    //         }
    //     })
    // }
    
    return Voucher
}