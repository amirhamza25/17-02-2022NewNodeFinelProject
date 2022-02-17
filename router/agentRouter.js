const express = require('express');
const agentRouter = express.Router();
//const verifyToken = require('../commonfun/auth');

// Multer for img upload
// const avatarUpload = require('../commonfun/avatarUpload');
// const attachmentUpload = require('../commonfun/avaterMultiUpload');

// Create Agent
const createAgent = require("../controller/AgentAdmin/createAgent");
agentRouter.post("/agentPanel/v1/CreateAgent", createAgent);

// Get agent information
const getAgentInfo = require("../controller/AgentAdmin/getAgentInfo");
agentRouter.get("/agentPanel/v1/GetAgentInfo", getAgentInfo);

// Get agent request information
const getAgentRequestInfo = require("../controller/AgentAdmin/getAgentRequestInfo");
agentRouter.get("/agentPanel/v1/GetAgentRequestInfo", getAgentRequestInfo);

// Get sub agent information
const getSubAgentInfo = require("../controller/AgentAdmin/getSubAgentInfo");
agentRouter.get("/agentPanel/v1/GetSubAgentInfo", getSubAgentInfo);

// Get sub agent request information
const getSubAgentRequestInfo = require("../controller/AgentAdmin/getSubAgentRequestInfo");
agentRouter.get("/agentPanel/v1/GetSubAgentRequestInfo", getSubAgentRequestInfo);

// Get agent sales information
const getAgentSalesInfo = require("../controller/AgentAdmin/getAgentSalesInfo");
agentRouter.get("/agentPanel/v1/GetAgentSalesInfo", getAgentSalesInfo);

// Get agent sales information
const getSubAgentSalesInfo = require("../controller/AgentAdmin/getSubAgentSalesInfo");
agentRouter.get("/agentPanel/v1/GetSubAgentSalesInfo", getSubAgentSalesInfo);

//Get agent order and order details information
const getAgentOrderDetails = require("../controller/AgentAdmin/getAgentOrderDetails");
agentRouter.get("/agentPanel/v1/GetAgentOrderDetails", getAgentOrderDetails);

//Get agent order pending information
const getAgentOrderPending = require("../controller/AgentAdmin/getAgentOrderPending");
agentRouter.get("/agentPanel/v1/GetAgentOrderPending", getAgentOrderPending);
//Get agent order process information
const getAgentOrderProcess = require("../controller/AgentAdmin/getAgentOrderProcess");
agentRouter.get("/agentPanel/v1/GetAgentOrderProcess", getAgentOrderProcess);
//Get agent order success information
const getAgentOrderSuccess = require("../controller/AgentAdmin/getAgentOrderSuccess");
agentRouter.get("/agentPanel/v1/GetAgentOrderSuccess", getAgentOrderSuccess);
//Get agent order cancel information
const getAgentOrderCancel = require("../controller/AgentAdmin/getAgentOrderCancel");
agentRouter.get("/agentPanel/v1/GetAgentOrderCancel", getAgentOrderCancel);

//Get agent order return information
const getAgentOrderReturn = require("../controller/AgentAdmin/getAgentOrderReturn");
agentRouter.get("/agentPanel/v1/GetAgentOrderReturn", getAgentOrderReturn);

//Get agent order return pending information
const getAgentOrderReturnPending = require("../controller/AgentAdmin/getAgentOrderReturnPending");
agentRouter.get("/agentPanel/v1/GetAgentOrderReturnPending", getAgentOrderReturnPending);

//Get agent order return process information
const getAgentOrderReturnProcess = require("../controller/AgentAdmin/getAgentOrderReturnProcess");
agentRouter.get("/agentPanel/v1/GetAgentOrderReturnProcess", getAgentOrderReturnProcess);

//Get agent order return success information
const getAgentOrderReturnSuccess = require("../controller/AgentAdmin/getAgentOrderReturnSuccess");
agentRouter.get("/agentPanel/v1/GetAgentOrderReturnSuccess", getAgentOrderReturnSuccess);

//Get agent order return cancel information
const getAgentOrderReturnCancel = require("../controller/AgentAdmin/getAgentOrderReturnCancel");
agentRouter.get("/agentPanel/v1/GetAgentOrderReturnCancel", getAgentOrderReturnCancel);

//Get agent stock qty information
const getAgentStockQty = require("../controller/AgentAdmin/getAgentStockQty");
agentRouter.get("/agentPanel/v1/GetAgentStockQty", getAgentStockQty);

//Get agent stock qty information
const getAgentStockQtyPackage = require("../controller/AgentAdmin/getAgentStockQtyPackage");
agentRouter.get("/agentPanel/v1/GetAgentStockQtyPackage", getAgentStockQtyPackage);

//Get agent stock qty remainder information
const getAgentStockQtyRemainder = require("../controller/AgentAdmin/getAgentStockQtyRemainder");
agentRouter.get("/agentPanel/v1/GetAgentStockQtyRemainder", getAgentStockQtyRemainder);

//Get agent stock qty remainder package information
const getAgentStockQtyRemainderPackage = require("../controller/AgentAdmin/getAgentStockQtyRemainderPackage");
agentRouter.get("/agentPanel/v1/GetAgentStockQtyRemainderPackage", getAgentStockQtyRemainderPackage);

// Common router for update delete
// const Update = require("../commonfun/Update");
// adminRouter.put("/Update", Update);
// const Delete = require("../commonfun/Delete");
// adminRouter.delete("/Delete", Delete);
// const getInformationSingle = require("../commonfun/getInformationSingle");
// adminRouter.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);



module.exports = agentRouter;