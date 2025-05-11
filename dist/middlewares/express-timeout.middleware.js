import timeout from 'connect-timeout';
import { HTTP_STATUS } from '../constants/index.js';
export const timeoutMiddleware = timeout('5s');
export const timeoutHandler = (req, res, next) => {
    if (!req.timedout) {
        next();
    }
    else {
        res.status(HTTP_STATUS.REQUEST_TIMEOUT).json({ error: 'Request timeout' });
    }
};
//# sourceMappingURL=express-timeout.middleware.js.map