// src/controllers/orderController.js
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        const orderId = await Order.createOrder(userId, productId, quantity);
        res.status(201).json({ orderId });
    } catch (error) {
        console.error('Error creating order: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error getting orders: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
