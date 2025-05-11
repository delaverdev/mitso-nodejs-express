import { LOG_LEVEL } from '../common/config.js';
export const logger = (req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        const message = `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`;
        console.log(`[${LOG_LEVEL}] ${message}`);
    });
    next();
};
//# sourceMappingURL=logger.middleware.js.map