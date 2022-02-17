const { orderDetails, member, agent, memberDetails } = require("../../models");
const { Op } = require("sequelize");
const listOfOrderSuccessProductFromUser = async (req, res, next) => {
    try {
        const datetime = new Date();
        const currentDate = (datetime.toISOString().slice(0, 10));
        const junction = await orderDetails.findAll({
            //attributes: ['id'],
            where: {
                [Op.and]: [{ orderType: 'return' }, { date: currentDate }]
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
                where:{id:"11"},
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

module.exports = listOfOrderSuccessProductFromUser;

