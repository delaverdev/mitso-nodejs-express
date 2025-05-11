import { AuthenticationError } from '../errors/index.js';
import { JWT_SECRET } from '../common/config.js';
import jwt from 'jsonwebtoken';
export const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new AuthenticationError('No token provided');
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = { id: decoded.id, role: decoded.role };
        next();
    }
    catch (err) {
        next(new AuthenticationError('Invalid token'));
    }
};
export const authorize = (roles) => {
    return (req, res, next) => {
        try {
            if (!req.user) {
                throw new AuthenticationError('User not authenticated');
            }
            if (!roles.includes(req.user.role || '')) {
                throw new AuthenticationError('User not authorized');
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
//# sourceMappingURL=auth.middleware.js.map