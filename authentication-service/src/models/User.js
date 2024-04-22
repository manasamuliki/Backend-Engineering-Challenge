// src/models/User.js
const db = require('../../config/db');

class User {
    static createUser(username, email, password) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            db.query(sql, [username, email, password], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results.insertId);
                }
            });
        });
    }

    static getUserByEmail(email) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM users WHERE email = ?';
            db.query(sql, [email], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }
}

module.exports = User;
