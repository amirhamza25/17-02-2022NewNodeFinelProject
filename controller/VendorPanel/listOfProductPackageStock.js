const { product, category, categorySub, categoryBrand, productStockQty } = require("../../models");
const { Op } = require("sequelize");
const listOfProductPackageStock = async (req, res, next) => {
    try {
        const junction = await productStockQty.findAll({
            where:{userId:"11"},
            order: [['id', 'DESC']],
            include: [{
                model: product,
                where: { [Op.and]: [{ productOwner: 'Vendor' }, { productType: 'Package' }] },
                // attributes: ['title'],
                through: { attributes: [] }
            }]
        })
            .then((item) => {
                res.json(item);
            })
            .catch((error) => {
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })

    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: "System failed" }] });
    }
}

module.exports = listOfProductPackageStock;

