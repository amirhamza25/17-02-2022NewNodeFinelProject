module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("category", {
        title: {
            type: DataTypes.STRING(50),
            unique: true,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Please enter your title"
                }
            }
        },
        mobileicon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        desktopicon: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        brandicon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        chk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "1"
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        });

    category.associate = (models) => {
        // Join with subCategory
        category.hasMany(models.categorySub);
        // Join with brandCategory
        category.hasMany(models.categoryBrand);
        // Join with product
        category.belongsToMany(models.product, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'categoryId',
        });
    }




    return category;
};