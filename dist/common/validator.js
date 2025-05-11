import { validate as uuidValidate } from 'uuid';
export const validateUuidParam = (paramName) => {
    return (req, res, next) => {
        const id = req.params[paramName];
        if (!id || !uuidValidate(id)) {
            res.status(400).json({ error: `Invalid ${paramName} parameter` });
            return;
        }
        next();
    };
};
export const validateBody = (requiredFields) => {
    return (req, res, next) => {
        const missingFields = requiredFields.filter(field => !req.body[field]);
        if (missingFields.length > 0) {
            res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
            return;
        }
        next();
    };
};
export const validateQuery = (requiredFields = []) => {
    return (req, res, next) => {
        const missingFields = requiredFields.filter(field => !req.query[field]);
        if (missingFields.length > 0) {
            res.status(400).json({ error: `Missing required query parameters: ${missingFields.join(', ')}` });
            return;
        }
        next();
    };
};
export function errorHandler(err, req, res, next) {
    res.status(500).json({ error: err.message || 'Internal Server Error' });
}
//# sourceMappingURL=validator.js.map