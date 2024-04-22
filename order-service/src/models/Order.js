// src/models/Order.js
const db = require('../../config/db');

class Order {
    static createOrder(userId, productId, quantity) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO orders (user_id, product_id, quantity) VALUES (?, ?, ?)';
            db.query(sql, [userId, productId, quantity], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results.insertId);
                }
            });
        });
    }

    static getAllOrders() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM orders';
            db.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

module.exports = Order;
