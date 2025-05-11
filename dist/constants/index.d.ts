export declare const HTTP_STATUS: {
    readonly OK: 200;
    readonly CREATED: 201;
    readonly NO_CONTENT: 204;
    readonly BAD_REQUEST: 400;
    readonly UNAUTHORIZED: 401;
    readonly FORBIDDEN: 403;
    readonly NOT_FOUND: 404;
    readonly TOO_MANY_REQUESTS: 429;
    readonly REQUEST_TIMEOUT: 408;
    readonly INTERNAL_SERVER_ERROR: 500;
};
export declare const ERROR_MESSAGES: {
    readonly NOT_FOUND: "Resource not found";
    readonly VALIDATION_ERROR: "Validation error";
    readonly DATABASE_ERROR: "Database error";
    readonly AUTHENTICATION_ERROR: "Authentication error";
    readonly AUTHORIZATION_ERROR: "Authorization error";
};
export declare const CURRENCIES: {
    readonly USD: "USD";
    readonly EUR: "EUR";
    readonly GBP: "GBP";
};
export declare const TIME_FORMATS: {
    readonly DATE: "YYYY-MM-DD";
    readonly TIME: "HH:mm:ss";
    readonly DATETIME: "YYYY-MM-DD HH:mm:ss";
};
