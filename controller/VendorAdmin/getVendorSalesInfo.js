const { agent, orderDetails, sequelize } = require("../../models");
const getVendorSalesInfo = async (req, res, next) => {
    try {
        const agentInfo = await agent.findAll({
            where: { agenrType: "Vendor", chk: "1" },
            order: [['id', 'DESC']],
            include: [{
                model: orderDetails,
                where: { orderType: "order" },
                attributes: [[sequelize.fn('sum', sequelize.col('totalProduct')), 'totalProduct'], [sequelize.fn('sum', sequelize.col('totalQty')), 'totalQty'], [sequelize.fn('sum', sequelize.col('totalPrice')), 'totalPrice']],
                through: { attributes: [] }
            }]
        })
            .then((item) => {
                res.json(item);
            })
            .catch((error) => {
                res.json(error['message']);
            })

    } catch (error) {
        res.status(500).json({ msg: "System faild" });
    }
}

module.exports = getVendorSalesInfo;

