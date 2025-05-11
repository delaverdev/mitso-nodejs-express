import slowDown from 'express-slow-down';
import { HTTP_STATUS } from '../constants/index.js';
export const slowDownMiddleware = slowDown({
    windowMs: 15 * 60 * 1000,
    delayAfter: 100,
    delayMs: 500,
    maxDelayMs: 2000,
    onLimitReached: (req, res) => {
        res.status(HTTP_STATUS.TOO_MANY_REQUESTS).json({ error: 'Too many requests' });
    }
});
//# sourceMappingURL=express-slow-down.middleware.js.map