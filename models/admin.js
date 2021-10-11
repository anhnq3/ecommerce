module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('admin', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            },
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
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
        role: {
            type: DataTypes.ENUM('admin', 'manager'),
            allowNull: false,
            defaultValue: 'admin'
        }
    },

    {freezeTableName: true})

    return Admin
}