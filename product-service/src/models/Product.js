// src/models/Product.js
const db = require('../../config/db');

class Product {
    static createProduct(userId, name, price) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO products (user_id, name, price) VALUES (?, ?, ?)';
            db.query(sql, [userId, name, price], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results.insertId);
                }
            });
        });
    }

    static getAllProducts() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM products';
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

module.exports = Product;
