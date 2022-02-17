const { member, balance, memberDetails, order, orderDetails, rel_order_details_user, sequelize } = require("../../models");

const shoppingCartOrder = async (req, res, next) => {
    try {
        const { Outlet, NewUser, orderType, phone, firstname, email, streetaddress, town, State, country } = req.body.userInfo
        console.log(req);
        let t;
        t = await sequelize.transaction();

        const ip = req._remoteAddress;
        var totalQty = 0;
        var totalPrice = 0;
        var totalProduct = 0;
        const productList = req.body.productInfo;
        const cartProductInfo = req.body.cartInfo;
        const invoiceSerila = await orderDetails.count();
        const orderTypes = orderType;
        Object.entries(cartProductInfo).map(([key, value]) => {
            const greaterThanTen = productList[key].filter(element => element.id == key);
            var totalProductPrice = (productList[key][2] * value);
            var totalProductQty = (value)
            totalQty += totalProductQty;
            totalPrice += totalProductPrice;
            totalProduct += 1;
            var singleOrder = order.create({ invoiceNumber: invoiceSerila, qty: totalProductQty, price: totalProductPrice, orderType: orderTypes }, { transaction: t });
        });
        if (NewUser == "NewUser") {
            const fdgdfg = await member.create({ userLog: phone, password: "123456", accountType: "User" }, { transaction: t });
            const dfghbnhg = await memberDetails.create({ userId: fdgdfg.id, name: firstname, number: phone, email: email, permanentaddress: streetaddress, city: town, districts: State, division: country }, { transaction: t });
            const sdfgerter = await balance.create({ userId: fdgdfg.id, balance: "0" }, { transaction: t });
            var userId = fdgdfg.id;
        } else {
            var userId = "11";
        }
        const insertOrderDetails = await orderDetails.create({ userId: userId, invoiceNumber: invoiceSerila, totalProduct: totalProduct, totalQty: totalQty, totalPrice: totalPrice, orderType: orderTypes, status: "pending" }, { transaction: t });
        const relInsertInfo = await rel_order_details_user.create({ invoiceNumber: invoiceSerila, orderDetailsId: insertOrderDetails.id, userId: userId, agentId: Outlet, vendorId: "11" }, { transaction: t })
            .then((item) => {
                t.commit();
                res.json({ success: [{ result: 'Your order successfully', msg: item }] });
            })
            .catch((error) => {
                t.rollback();
                res.json({ errors: [{ result: 'error', msg: error['message'] }] });
            })
    } catch (error) {
        res.status(500).json({ errors: [{ result: 'error', msg: "System faild" }] });
    }
}

module.exports = shoppingCartOrder;

