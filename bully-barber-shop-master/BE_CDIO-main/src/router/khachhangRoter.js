const express = require('express');
const router = express.Router({ mergeParams: true }); // Create a router instance

// Import the controller for handling khachhang-related requests
const KhachHangController = require("../controller/khachhang.controller");


// Define a route for handling GET requests to the root path "/"
router.get("/", KhachHangController.getAllCustomers);
router.post("/",KhachHangController.createCustomer);
router.put("/",KhachHangController.updateCustomer);
router.delete('/',KhachHangController.deleteCustomer);
// Export the router so it can be used in other files
module.exports = router;
