const express = require('express');
const vendorRouter = express.Router();
//const verifyToken = require('../commonfun/auth');

// Multer for img upload
// const avatarUpload = require('../commonfun/avatarUpload');
// const attachmentUpload = require('../commonfun/avaterMultiUpload');

// Create Vendor
const createVendor = require("../controller/VendorAdmin/createVendor");
vendorRouter.post("/CreateVendor", createVendor);

// Get Vendor information
const getVendorInfo = require("../controller/VendorAdmin/getVendorInfo");
vendorRouter.get("/GetVendorInfo", getVendorInfo);

// Get vendor request information
const getVendorRequestInfo = require("../controller/VendorAdmin/getVendorRequestInfo");
vendorRouter.get("/GetVendorRequestInfo", getVendorRequestInfo);

// Get vendor sales information
const getVendorSalesInfo = require("../controller/VendorAdmin/getVendorSalesInfo");
vendorRouter.get("/GetVendorSalesInfo", getVendorSalesInfo);

//Get vendor order and order details information
const getVendorOrderDetails = require("../controller/VendorAdmin/getVendorOrderDetails");
vendorRouter.get("/GetVendorOrderDetails", getVendorOrderDetails);

//Get vendor order pending information
const getVendorOrderPending = require("../controller/VendorAdmin/getVendorOrderPending");
vendorRouter.get("/GetVendorOrderPending", getVendorOrderPending);

//Get vendor order process information
const getVendorOrderProcess = require("../controller/VendorAdmin/getVendorOrderProcess");
vendorRouter.get("/GetVendorOrderProcess", getVendorOrderProcess);

//Get vendor order success information
const getVendorOrderSuccess = require("../controller/VendorAdmin/getVendorOrderSuccess");
vendorRouter.get("/GetVendorOrderSuccess", getVendorOrderSuccess);

//Get vendor order cancel information
const getVendorOrderCancel = require("../controller/VendorAdmin/getVendorOrderCancel");
vendorRouter.get("/GetVendorOrderCancel", getVendorOrderCancel);

//Get vendor order return information
const getVendorOrderReturn = require("../controller/VendorAdmin/getVendorOrderReturn");
vendorRouter.get("/GetVendorOrderReturn", getVendorOrderReturn);

//Get vendor order return pending information
const getVendorOrderReturnPending = require("../controller/VendorAdmin/getVendorOrderReturnPending");
vendorRouter.get("/GetVendorOrderReturnPending", getVendorOrderReturnPending);

//Get vendor order return process information
const getVendorOrderReturnProcess = require("../controller/VendorAdmin/getVendorOrderReturnProcess");
vendorRouter.get("/GetVendorOrderReturnProcess", getVendorOrderReturnProcess);

//Get vendor order return success information
const getVendorOrderReturnSuccess = require("../controller/VendorAdmin/getVendorOrderReturnSuccess");
vendorRouter.get("/GetVendorOrderReturnSuccess", getVendorOrderReturnSuccess);

//Get vendor order return cancel information
const getVendorOrderReturnCancel = require("../controller/VendorAdmin/getVendorOrderReturnCancel");
vendorRouter.get("/GetVendorOrderReturnCancel", getVendorOrderReturnCancel);

//Get vendor product information
const getVendorProductInformation = require("../controller/VendorAdmin/getVendorProductInformation");
vendorRouter.get("/GetVendorProductInformation/:vendorId", getVendorProductInformation);

//Get vendor stock qty information
const getVendorStockQty = require("../controller/VendorAdmin/getVendorStockQty");
vendorRouter.get("/GetVendorStockQty", getVendorStockQty);

//Get vendor stock qty information
const getVendorStockQtyPackage = require("../controller/VendorAdmin/getVendorStockQtyPackage");
vendorRouter.get("/GetVendorStockQtyPackage", getVendorStockQtyPackage);

//Get vendor stock qty remainder information
const getVendorStockQtyRemainder = require("../controller/VendorAdmin/getVendorStockQtyRemainder");
vendorRouter.get("/GetVendorStockQtyRemainder", getVendorStockQtyRemainder);

//Get vendor stock qty remainder package information
const getVendorStockQtyRemainderPackage = require("../controller/VendorAdmin/getVendorStockQtyRemainderPackage");
vendorRouter.get("/GetVendorStockQtyRemainderPackage", getVendorStockQtyRemainderPackage);

// Common router for update delete
// const Update = require("../commonfun/Update");
// adminRouter.put("/Update", Update);
// const Delete = require("../commonfun/Delete");
// adminRouter.delete("/Delete", Delete);
// const getInformationSingle = require("../commonfun/getInformationSingle");
// adminRouter.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);



module.exports = vendorRouter;