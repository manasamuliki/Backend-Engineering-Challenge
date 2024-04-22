// src/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);

module.exports = router;
