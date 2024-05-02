const express = require('express');
const router = express.Router({ mergeParams: true }); // Create a router instance

// Import the controller for handling khachhang-related requests
const dichvucontroller=require("../controller/dichvi.controller");
router.get('/',dichvucontroller.getAllServices);
router.post('/',dichvucontroller.createService);
router.delete('/',dichvucontroller.deleteService);
router.put('/',dichvucontroller.updateService)
module.exports = router;
