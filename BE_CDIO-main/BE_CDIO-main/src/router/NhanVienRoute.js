const express = require('express');
const router = express.Router({ mergeParams: true }); // Create a router instance

// Import the controller for handling khachhang-related requests
const NhanVienController = require("../controller/nhanvien.controller");


// Define a route for handling GET requests to the root path "/"
router.get("/", NhanVienController.getAllCustomers);
router.post("/",NhanVienController.createCustomer);
router.put("/",NhanVienController.updateCustomer);
router.delete('/',NhanVienController.deleteCustomer);
// Export the router so it can be used in other files
module.exports = router;
