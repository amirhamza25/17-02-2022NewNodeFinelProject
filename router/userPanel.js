const express = require('express');
const userPanel = express.Router();
//const verifyToken = require('../commonfun/auth');

// Multer for img upload
// const avatarUpload = require('../commonfun/avatarUpload');
// const attachmentUpload = require('../commonfun/avaterMultiUpload');

// Dailay order list
const dailyOrderList = require("../controller/userPanel/dailyOrderList");
userPanel.get("/userPanel/v1/GetDailyOrderList", dailyOrderList);

// Dailay pending order list
const dailyPendingOrderList = require("../controller/userPanel/dailyPendingOrderList");
userPanel.get("/userPanel/v1/GetDailyPendingOrderList", dailyPendingOrderList);

// Dailay process order list
const dailyProcessOrderList = require("../controller/userPanel/dailyProcessOrderList");
userPanel.get("/userPanel/v1/GetDailyProcessOrderList", dailyProcessOrderList);

// Dailay success order list
const dailySuccessOrderList = require("../controller/userPanel/dailySuccessOrderList");
userPanel.get("/userPanel/v1/GetDailySuccessOrderList", dailySuccessOrderList);

// Dailay cancel order list
const dailyCancelOrderList = require("../controller/userPanel/dailyCancelOrderList");
userPanel.get("/userPanel/v1/GetDailyCancelOrderList", dailyCancelOrderList);

// Dailay return pending order list
const dailyReturnPendingOrderList = require("../controller/userPanel/dailyReturnPendingOrderList");
userPanel.get("/userPanel/v1/GetDailyReturnPendingOrderList", dailyReturnPendingOrderList);

// Dailay return process order list
const dailyReturnProcessOrderList = require("../controller/userPanel/dailyReturnProcessOrderList");
userPanel.get("/userPanel/v1/GetDailyReturnProcessOrderList", dailyReturnProcessOrderList);

// Dailay return success order list
const dailyReturnSuccessOrderList = require("../controller/userPanel/dailyReturnSuccessOrderList");
userPanel.get("/userPanel/v1/GetDailyReturnSuccessOrderList", dailyReturnSuccessOrderList);

// Dailay return cancel order list
const dailyReturnCancelOrderList = require("../controller/userPanel/dailyReturnCancelOrderList");
userPanel.get("/userPanel/v1/GetDailyReturnCancelOrderList", dailyReturnCancelOrderList); ///fdgdfgdfg///

// Total pending order list
const totalPendingOrderList = require("../controller/userPanel/totalPendingOrderList");
userPanel.get("/userPanel/v1/GetTotalPendingOrderList", totalPendingOrderList);

// Total process order list
const totalProcessOrderList = require("../controller/userPanel/totalProcessOrderList");
userPanel.get("/userPanel/v1/GetTotalProcessOrderList", totalProcessOrderList);

// Total success order list
const totalSuccessOrderList = require("../controller/userPanel/totalSuccessOrderList");
userPanel.get("/userPanel/v1/GetTotalSuccessOrderList", totalSuccessOrderList);

// Total cancel order list
const totalCancelOrderList = require("../controller/userPanel/totalCancelOrderList");
userPanel.get("/userPanel/v1/GetTotalCancelOrderList", totalCancelOrderList);

// Total return pending order list
const totalReturnPendingOrderList = require("../controller/userPanel/totalReturnPendingOrderList");
userPanel.get("/userPanel/v1/GetTotalReturnPendingOrderList", totalReturnPendingOrderList);

// Total return process order list
const totalReturnProcessOrderList = require("../controller/userPanel/totalReturnProcessOrderList");
userPanel.get("/userPanel/v1/GetTotalReturnProcessOrderList", totalReturnProcessOrderList);

// Total return success order list
const totalReturnSuccessOrderList = require("../controller/userPanel/totalReturnSuccessOrderList");
userPanel.get("/userPanel/v1/GetTotalReturnSuccessOrderList", totalReturnSuccessOrderList);

// Total return cancel order list
const totalReturnCancelOrderList = require("../controller/userPanel/totalReturnCancelOrderList");
userPanel.get("/userPanel/v1/GetTotalReturnCancelOrderList", totalReturnCancelOrderList);

// Common router for update delete
// const Update = require("../commonfun/Update");
// adminRouter.put("/Update", Update);
// const Delete = require("../commonfun/Delete");
// adminRouter.delete("/Delete", Delete);
// const getInformationSingle = require("../commonfun/getInformationSingle");
// adminRouter.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);



module.exports = userPanel;