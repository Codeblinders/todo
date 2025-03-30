import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.JWT_SECRET;

const authenticateToken = async (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Authentication Failed!' });

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ message: "Token is not valid! Please Login again!" });
        req.user = user;
        next();
    });
};

export default authenticateToken;
