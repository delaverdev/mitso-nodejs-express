import morgan from 'morgan';
export const httpLogger = morgan('combined', {
    skip: (req, res) => res.statusCode < 400,
    stream: {
        write: (message) => {
            console.log(message.trim());
        }
    }
});
//# sourceMappingURL=morgan.middleware.js.map