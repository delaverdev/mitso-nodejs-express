import session from 'express-session';
import { JWT_SECRET } from '../common/config.js';
export const sessionMiddleware = session({
    secret: JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
});
//# sourceMappingURL=express-session.middleware.js.map