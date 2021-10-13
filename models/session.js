module.exports = (sequelize, DataTypes) => {
    const Session = sequelize.define('session', {
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
            },
        },
        jwt: {
            type: DataTypes.STRING(500),
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        refreshToken: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        
    },
    {freezeTableName: true})

    Session.associate = models => {
        Session.belongsTo(models.users, {
            foreignkey: {
                allowNull: false
            }
        })
    }
    
    return Session
}