const { orderDetails, member, agent, memberDetails } = require("../../models");
const { Op } = require("sequelize");
const totalCancelOrderList = async (req, res, next) => {
    try {
        const junction = await orderDetails.findAll({
            //attributes: ['id'],
            where: {
                [Op.and]: [{ userId: '5' },{ status: 'cancel' },{ orderType: 'order' }]
            },
            order: [['id', 'DESC']],
            include: [{
                model: member,
                through: { attributes: [] }
            }, {
                model: memberDetails,
                through: { attributes: [] }
            }, {
                model: agent,
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

module.exports = totalCancelOrderList;

