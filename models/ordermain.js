module.exports = (sequelize, DataTypes) => {
    const Ordermain = sequelize.define('ordermain', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            },
            primaryKey: true
        },
        flashsaleId: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        orderId: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true
            }
        }
    },
    
    {freezeTableName: true})

    Ordermain.associate = model => {
        Ordermain.belongsTo(model.flashsale, {
            foreignkey: {
                allowNull: false
            }
        })
    }

    Ordermain.associate = models => {
        Ordermain.hasOne(models.user, {
            onDelete: "cascade"
        })
    }
    
    Ordermain.associate = model => {
        Ordermain.belongsTo(model.order, {
            foreignkey: {
                allowNull: false
            }
        })
    }
    return Ordermain
}