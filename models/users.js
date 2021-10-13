module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            },
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            defaultValue: 'user'
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        phoneNum: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        role: {
            type: DataTypes.ENUM('customer', 'admin', 'sale'),
            allowNull: false,
            defaultValue: 'customer',
        },
        checkVerify: {
            type: DataTypes.ENUM('verified', 'verify needed'),
            allowNull: false,
            defaultValue: 'verify needed',
        }
    })
    
    Users.associate = models => {
        Users.hasOne(models.session, {
            onDelete: "cascade",
            
        })
    }

    Users.associate = models => {
        Users.hasMany(models.ordermain, {
            onDelete: "cascade",
            hooks: true
        })
    }

    return Users
}