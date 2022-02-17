module.exports = (sequelize, DataTypes) => {
    const categorySub = sequelize.define("categorySub", {
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Select category"
                }
            }
        },
        title: {
            type: DataTypes.STRING(50),
            validate: {
                notEmpty: {
                    args: true,
                    msg: "Please enter your sub category name"
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
    }, {
        timestamps: false,
        freezeTableName: true
    });

    categorySub.associate = (models) => {
        // Join with category
        categorySub.belongsTo(models.category, {
            foreignKey: 'categoryId',
        });
        // Join with brandCategory
        categorySub.hasMany(models.categoryBrand);
        // Join with product
        categorySub.belongsToMany(models.product, {
            through: 'rel_cat_subcat_brand_product',
            foreignKey: 'categorySubId',
        });
    }


    return categorySub;
};