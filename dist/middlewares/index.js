import { validateUuidParam, validateBody } from '../common/validator.js';
export const validateUser = (req, res, next) => {
    validateBody(['name', 'login', 'password'])(req, res, next);
};
export const validateTour = (req, res, next) => {
    validateBody(['name', 'description'])(req, res, next);
};
export const validateSchedule = (req, res, next) => {
    validateBody(['tourId', 'date', 'time'])(req, res, next);
};
export const validatePrice = (req, res, next) => {
    validateBody(['scheduleId', 'price', 'currency'])(req, res, next);
};
export const validateId = (paramName) => {
    return (req, res, next) => {
        validateUuidParam(paramName)(req, res, next);
    };
};
//# sourceMappingURL=index.js.map