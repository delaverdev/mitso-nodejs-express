import { NotFoundError, ValidationError, DatabaseError, AuthenticationError, AuthorizationError } from '../errors/index.js';
import { HTTP_STATUS } from '../constants/index.js';
export const errorHandler = (err, req, res, next) => {
    console.error(err);
    if (err instanceof NotFoundError) {
        res.status(HTTP_STATUS.NOT_FOUND).json({ error: err.message });
        return;
    }
    if (err instanceof ValidationError) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({ error: err.message });
        return;
    }
    if (err instanceof DatabaseError) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: err.message });
        return;
    }
    if (err instanceof AuthenticationError) {
        res.status(HTTP_STATUS.UNAUTHORIZED).json({ error: err.message });
        return;
    }
    if (err instanceof AuthorizationError) {
        res.status(HTTP_STATUS.FORBIDDEN).json({ error: err.message });
        return;
    }
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
};
//# sourceMappingURL=error.middleware.js.map