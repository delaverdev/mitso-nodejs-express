import { validate as uuidValidate } from 'uuid';
export const validateUser = [
    (req, res, next) => {
        const { name, login, password } = req.body;
        if (!name || !login || !password) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }
        next();
    }
];
export const validateTour = [
    (req, res, next) => {
        const { name, description } = req.body;
        if (!name || !description) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }
        next();
    }
];
export const validateSchedule = [
    (req, res, next) => {
        const { tourId, date, time } = req.body;
        if (!tourId || !date || !time) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }
        next();
    }
];
export const validatePrice = [
    (req, res, next) => {
        const { scheduleId, price, currency } = req.body;
        if (!scheduleId || !price || !currency) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }
        if (isNaN(Number(price))) {
            res.status(400).json({ error: 'Price must be a number' });
            return;
        }
        next();
    }
];
export const validateId = [
    (req, res, next) => {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ error: 'ID is required' });
            return;
        }
        next();
    }
];
export const validateQuery = [
    (req, res, next) => {
        const { tourId, scheduleId } = req.query;
        if (tourId && typeof tourId !== 'string') {
            res.status(400).json({ error: 'Tour ID must be a string' });
            return;
        }
        if (scheduleId && typeof scheduleId !== 'string') {
            res.status(400).json({ error: 'Schedule ID must be a string' });
            return;
        }
        next();
    }
];
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
//# sourceMappingURL=express-validator-rules.middleware.js.map