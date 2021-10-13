module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            validate: {
                notEmpty: true
            },
            primaryKey: true
        },
        categoryname: {
            type: DataTypes.STRING(),
            unique:true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        categoryicon: {
            type: DataTypes.STRING(),
            validate: {
                notEmpty: true
            }
        },
        
    },
    {freezeTableName: true})

        Category.associate = models => {
            Category.hasMany(models.products, {
                onDelete: "cascade"
            })
        }
        
    return Category
}