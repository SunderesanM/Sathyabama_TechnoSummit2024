const express = require('express');
const departmentInchargeController = require('../controllers/departmentInchargeController');
const router = express.Router();

router.post('/login' ,departmentInchargeController.InchargeLogin);
router.post('/update' ,departmentInchargeController.updatePaymentStatus);

module.exports = router;
