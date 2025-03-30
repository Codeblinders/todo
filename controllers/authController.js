import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.JWT_SECRET;

export async function registerUser(req, res) {
    let { firstName, lastName, username, password } = req.body;
    try {
        const duplicate = await User.findOne({ username }); // Use `findOne()` instead of `find()`
        if (duplicate) {
            return res.status(400).json({ message: 'User already registered with this username' });
        }
        let user = new User({ firstName, lastName, username, password });
        const result = await user.save();
        console.log(result);
        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}

export async function loginUser(req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "Authentication Failed!" });
        }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "You entered the wrong password" });
        }
        let token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
        let finalData = {
            userId: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token
        };
        res.json(finalData);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err.message });
    }
}
