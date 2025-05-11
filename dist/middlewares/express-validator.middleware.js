import { ValidationError } from '../errors/index.js';
export const validate = (req, res, next) => {
    const errors = (req.validationErrors?.() || []);
    if (errors.length > 0) {
        throw new ValidationError(errors.map(err => err.msg).join(', '));
    }
    next();
};
//# sourceMappingURL=express-validator.middleware.js.map