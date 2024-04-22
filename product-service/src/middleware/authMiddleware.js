// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_secret_key';

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error('Error verifying token: ', error);
        res.status(401).json({ error: 'Unauthorized' });
    }
};
