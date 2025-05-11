import { HTTP_STATUS } from '../constants/index.js';
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 100;
const requests = new Map();
export const rateLimitMiddleware = (req, res, next) => {
    const ip = req.ip || 'unknown';
    const now = Date.now();
    if (!requests.has(ip)) {
        requests.set(ip, { count: 1, resetTime: now + WINDOW_MS });
        next();
        return;
    }
    const requestData = requests.get(ip);
    if (now > requestData.resetTime) {
        requests.set(ip, { count: 1, resetTime: now + WINDOW_MS });
        next();
        return;
    }
    if (requestData.count >= MAX_REQUESTS) {
        res.status(HTTP_STATUS.TOO_MANY_REQUESTS).json({ error: 'Too many requests' });
        return;
    }
    requestData.count++;
    next();
};
//# sourceMappingURL=rate-limit.middleware.js.map