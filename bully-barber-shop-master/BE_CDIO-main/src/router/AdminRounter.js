const express = require('express');
const router = express.Router({ mergeParams: true }); // Create a router instance

// Import the controller for handling khachhang-related requests
const AdminController = require("../controller/admin.controller");


// Define a route for handling GET requests to the root path "/"
router.get("/", AdminController.getAllCustomers);
router.post("/",AdminController.createCustomer);
router.put("/",AdminController.updateCustomer);
router.delete('/',AdminController.deleteCustomer);
// Export the router so it can be used in other files
module.exports = router;
