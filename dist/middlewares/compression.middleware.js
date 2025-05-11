import compression from 'compression';
export const compress = compression({
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    },
    level: 6
});
//# sourceMappingURL=compression.middleware.js.map