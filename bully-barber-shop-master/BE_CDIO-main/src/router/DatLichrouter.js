const express = require('express');
const router = express.Router({ mergeParams: true }); // Create a router instance

// Import the controller for handling khachhang-related requests
const DatLichController = require('../controller/datlich.controller')
router.get('/',DatLichController.getAllDatLich);
router.post('/',DatLichController.createDatLich);
router.delete('/',DatLichController.deleteDatLich);
router.put('/',DatLichController.updateDatLich);
module.exports = router;
