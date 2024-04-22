// src/routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', orderController.createOrder);
router.get('/', orderController.getAllOrders);

module.exports = router;
