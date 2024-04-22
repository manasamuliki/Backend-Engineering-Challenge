// src/controllers/userController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const saltRounds = 10;
const JWT_SECRET = 'your_secret_key';

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const userId = await User.createUser(username, email, hashedPassword);
        res.status(201).json({ userId });
    } catch (error) {
        console.error('Error registering user: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.getUserByEmail(email);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        const token = jwt.sign({ userId: user.id }, JWT_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in user: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// src/controllers/userController.js
exports.getUserProfile = async (req, res) => {
    try {
        // Fetch user profile information from the database using req.userId
        res.status(200).json({ userId: req.userId });
    } catch (error) {
        console.error('Error getting user profile: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
