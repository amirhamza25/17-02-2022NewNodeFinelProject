const express = require('express');
const vendorPanel = express.Router();
//const verifyToken = require('../commonfun/auth');

// Multer for img upload
// const avatarUpload = require('../commonfun/avatarUpload');
const attachmentUpload = require('../commonfun/avaterMultiUpload');

// Vendor product upload
const addProduct = require("../controller/VendorPanel/addProduct");
vendorPanel.post("/vendorPanel/v1/AddProduct",attachmentUpload,addProduct);

// Vendor product list
const listOfProduct = require("../controller/VendorPanel/listOfProduct");
vendorPanel.get("/vendorPanel/v1/GetListOfProduct",listOfProduct);

// Vendor product stock list
const listOfProductStock = require("../controller/VendorPanel/listOfProductStock");
vendorPanel.get("/vendorPanel/v1/GetListOfProductStock",listOfProductStock);

// Vendor product package stock list
const listOfProductPackageStock = require("../controller/VendorPanel/listOfProductPackageStock");
vendorPanel.get("/vendorPanel/v1/GetListOfProductPackageStock",listOfProductPackageStock);

// Vendor product remainder stock list
const listOfProductRemainderStock = require("../controller/VendorPanel/listOfProductRemainderStock");
vendorPanel.get("/vendorPanel/v1/GetListOfProductRemainderStock",listOfProductRemainderStock);

// Vendor product remainder package stock list
const listOfProductRemainderPackageStock = require("../controller/VendorPanel/listOfProductRemainderPackageStock");
vendorPanel.get("/vendorPanel/v1/GetListOfProductRemainderPackageStock",listOfProductRemainderPackageStock);

// List of order pending product from user
const listOfOrderPendingProductFromUser = require("../controller/VendorPanel/listOfOrderPendingProductFromUser");
vendorPanel.get("/vendorPanel/v1/GetListOfOrderPendingProductFromUser",listOfOrderPendingProductFromUser);

// List of order process product from user
const listOfOrderProcessProductFromUser = require("../controller/VendorPanel/listOfOrderProcessProductFromUser");
vendorPanel.get("/vendorPanel/v1/GetListOfOrderProcessProductFromUser",listOfOrderProcessProductFromUser);

// List of order success product from user
const listOfOrderSuccessProductFromUser = require("../controller/VendorPanel/listOfOrderSuccessProductFromUser");
vendorPanel.get("/vendorPanel/v1/GetListOfOrderSuccessProductFromUser",listOfOrderSuccessProductFromUser);

// List of order cancel product from user
const listOfOrderCancelProductFromUser = require("../controller/VendorPanel/listOfOrderCancelProductFromUser");
vendorPanel.get("/vendorPanel/v1/GetListOfOrderCancelProductFromUser",listOfOrderCancelProductFromUser);

// List of order return product from user
const listOfOrderReturnProductFromUser = require("../controller/VendorPanel/listOfOrderReturnProductFromUser");
vendorPanel.get("/vendorPanel/v1/GetListOfOrderReturnProductFromUser",listOfOrderReturnProductFromUser);

// Common router for update delete
// const Update = require("../commonfun/Update");
// adminRouter.put("/Update", Update);
// const Delete = require("../commonfun/Delete");
// adminRouter.delete("/Delete", Delete);
// const getInformationSingle = require("../commonfun/getInformationSingle");
// adminRouter.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);



module.exports = vendorPanel;