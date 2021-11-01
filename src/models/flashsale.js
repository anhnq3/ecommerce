module.exports = (sequelize, DataTypes) => {
    const Flashsale = sequelize.define('flashsale', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            },
            primaryKey: true
        },
        flashsalediscount: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        flashsalename: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        flashsalestartdate: {
            type: DataTypes.DATE(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        flashsaleenddate: {
            type: DataTypes.DATE(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        flashsalestatus: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'inactive',
            validate: {
                notEmpty: true
            }
        },
        flashsalequantity: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        code: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    },

        { freezeTableName: true })

        
        Flashsale.associate = models => {
            Flashsale.hasMany(models.ordermain, {
                onDelete: "cascade"
            })
        }

    return Flashsale
}