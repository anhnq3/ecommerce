module.exports = (sequelize, DataTypes) => {
    const Productattributes = sequelize.define('productattributes', {
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
        color: {
            type: DataTypes.STRING(),
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        type: {
            type: DataTypes.STRING(),
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        
    })

    // Productattributes.associate = models => {
    //     Productattributes.belongsTo(models.products, {
    //         foreignkey: {
    //             allowNull: false
    //         }
    //     })
    // }
    
    return Productattributes
}