const express = require('express');
const adminRouter = express.Router();
//const verifyToken = require('../commonfun/auth');

// // Multer for img upload
const avatarUpload = require('../commonfun/avatarUpload');
const attachmentUpload = require('../commonfun/avaterMultiUpload');

// // Registration
// const Registration = require("../controller/Admin/Registration");
// adminRouter.post("/registration", Registration);

// Admin login
const Login = require("../controller/Admin/Login");
adminRouter.post("/Login", Login); // (done)

// Add category
const addCategory = require("../controller/Admin/addCategory");
adminRouter.post("/AddCategory", avatarUpload, addCategory); // (done)

// // Add sub category
const addCategorySub = require("../controller/Admin/addSubCategory");
adminRouter.post("/AddSubCategory", avatarUpload, addCategorySub); // (done)

// // Add category brand
const addCategoryBrand = require("../controller/Admin/addCategoryBrand");
adminRouter.post("/AddCategoryBrand", avatarUpload, addCategoryBrand); // (done)

// // Get category data
const getCategoryData = require("../controller/Admin/getCategoryData");
adminRouter.get("/GetCategoryData", getCategoryData); // (done)

// // Get category data
const getBrandData = require("../controller/Admin/getBrandData");
adminRouter.get("/GetBrandData", getBrandData); // (done)

// // Add slider and ads
const addSliderAndAds = require('../controller/Admin/addSliderAndAds');
adminRouter.post("/AddSliderAndAds", avatarUpload, addSliderAndAds);

// // Add product
const addProduct = require('../controller/Admin/addProduct');
adminRouter.post("/AddProduct", attachmentUpload, addProduct); // (done)

// Get reguler product  
const getAllProduct = require('../controller/Admin/getAllProduct');
adminRouter.get("/GetAllProduct", getAllProduct); // (done)

// Get pack product  
const getAllPackageProduct = require('../controller/Admin/getAllPackageProduct');
adminRouter.get("/GetAllPackageProduct", getAllPackageProduct); // (done)

// Get offer product
const getAllOfferProduct = require('../controller/Admin/getAllOfferProduct');
adminRouter.get("/GetAllOfferProduct", getAllOfferProduct);  // (done)

// Get flash sales product
const getAllFlashSalesProduct = require('../controller/Admin/getAllFlashSalesProduct');
adminRouter.get("/GetAllFlashSalesProduct", getAllFlashSalesProduct); // (done)

// Get cash back product
const getAllCashBackProduct = require('../controller/Admin/getAllCashBackProduct');
adminRouter.get("/GetAllCashBackProduct", getAllCashBackProduct); // (done)

// Get discount product
const getAllDiscountProduct = require('../controller/Admin/getAllDiscountProduct');
adminRouter.get("/GetAllDiscountProduct", getAllDiscountProduct);  // (done)

// Get admin product stock qty
const getAdminProductStockQty = require('../controller/Admin/getAdminProductStockQty');
adminRouter.get("/GetAdminProductStockQty", getAdminProductStockQty); // (done)

// Remainder admin product stock qty
const getRemainderAdminProductStockQty = require('../controller/Admin/getRemainderAdminProductStockQty');
adminRouter.get("/GetRemainderAdminProductStockQty", getRemainderAdminProductStockQty); // (done)

// Get admin product stock qty
const getRemainderAdminProductPackStockQty = require('../controller/Admin/getRemainderAdminProductPackStockQty');
adminRouter.get("/GetRemainderAdminProductPackStockQty", getRemainderAdminProductPackStockQty); // (done)

// Update product qty and get product
const getProductForUpdateQty = require('../controller/Admin/getProductForUpdateQty');
adminRouter.get("/GetProductForUpdateQty", getProductForUpdateQty); // (done)
const updateProductQty = require('../controller/Admin/updateProductQty');
adminRouter.post("/UpdateProductQty", updateProductQty); // (done)

// Reguler product stock list
const regulerProductStockQtyList = require('../controller/Admin/regulerProductStockQtyList');
adminRouter.get("/RegulerProductStockQtyList", regulerProductStockQtyList);  // (done)

// Package product stock list
const packageProductStockQtyList = require('../controller/Admin/packageProductStockQtyList');
adminRouter.get("/PackageProductStockQtyList", packageProductStockQtyList); // (done)

// Daily pending order list
const dailyPendingOrderList = require('../controller/Admin/dailyPendingOrderList');
adminRouter.get("/DailyPendingOrderList", dailyPendingOrderList); // (done)

// Daily process order list
const dailyProcessOrderList = require('../controller/Admin/dailyProcessOrderList');
adminRouter.get("/DailyProcessOrderList", dailyProcessOrderList); // (done)

// Daily success order list
const dailySuccessOrderList = require('../controller/Admin/dailySuccessOrderList');
adminRouter.get("/DailySuccessOrderList", dailySuccessOrderList); // (done)

// Daily cancel order list
const dailyCancelOrderList = require('../controller/Admin/dailyCancelOrderList');
adminRouter.get("/DailyCancelOrderList", dailyCancelOrderList); // (done)

// Daily return pending order list
const dailyReturnPendingOrderList = require('../controller/Admin/dailyReturnPendingOrderList');
adminRouter.get("/DailyReturnPendingOrderList", dailyReturnPendingOrderList); // (done)

// Daily return process order list
const dailyReturnProcessOrderList = require('../controller/Admin/dailyReturnProcessOrderList');
adminRouter.get("/DailyReturnProcessOrderList", dailyReturnProcessOrderList); // (done)

// Daily return success order list
const dailyReturnSuccessOrderList = require('../controller/Admin/dailyReturnSuccessOrderList');
adminRouter.get("/DailyReturnSuccessOrderList", dailyReturnSuccessOrderList); // (done)

// Daily return cancel order list
const dailyReturnCancelOrderList = require('../controller/Admin/dailyReturnCancelOrderList');
adminRouter.get("/DailyReturnCancelOrderList", dailyReturnCancelOrderList); // (done)

// All pending order list
const allPendingOrderList = require('../controller/Admin/allPendingOrderList');
adminRouter.get("/GetAllPendingOrderList", allPendingOrderList); // (done)

// All process order list
const allProcessOrderList = require('../controller/Admin/allProcessOrderList');
adminRouter.get("/GetAllProcessOrderList", allProcessOrderList); // (done)

// All success order list
const allSuccessOrderList = require('../controller/Admin/allSuccessOrderList');
adminRouter.get("/GetAllSuccessOrderList", allSuccessOrderList); // (done)

// All cancel order list
const allCancelOrderList = require('../controller/Admin/allCancelOrderList');
adminRouter.get("/GetAllCancelOrderList", allCancelOrderList); // (done)

// All return pending order list
const allReturnPendingOrderList = require('../controller/Admin/allReturnPendingOrderList');
adminRouter.get("/GetAllReturnPendingOrderList", allReturnPendingOrderList); // (done)

// All return process order list
const allReturnProcessOrderList = require('../controller/Admin/allReturnProcessOrderList');
adminRouter.get("/GetAllReturnProcessOrderList", allReturnProcessOrderList); // (done)

// All return success order list
const allReturnSuccessOrderList = require('../controller/Admin/allReturnSuccessOrderList');
adminRouter.get("/GetAllReturnSuccessOrderList", allReturnSuccessOrderList); // (done)

// All return cancel order list
const allReturnCancelOrderList = require('../controller/Admin/allReturnCancelOrderList');
adminRouter.get("/GetAllReturnCancelOrderList", allReturnCancelOrderList); // (done)

// // Common router for update delete
const Update = require("../commonfun/Update");
adminRouter.put("/Update", Update);
const Delete = require("../commonfun/Delete");
adminRouter.post("/Delete", Delete);
const getInformationSingle = require("../commonfun/getInformationSingle");
adminRouter.get("/GetInformationSingle/:tableName&:condition", getInformationSingle);



module.exports = adminRouter;