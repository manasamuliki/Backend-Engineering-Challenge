// src/controllers/productController.js
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { name, price } = req.body;
    const userId = req.userId; // Extract userId from JWT token
    try {
        const productId = await Product.createProduct(userId, name, price);
        res.status(201).json({ productId });
    } catch (error) {
        console.error('Error creating product: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// src/controllers/productController.js
exports.getAllProducts = async (req, res) => {
    const userId = req.userId; // Extract userId from JWT token
    try {
        const products = await Product.getAllProductsByUserId(userId);
        res.status(200).json(products);
    } catch (error) {
        console.error('Error getting products: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
