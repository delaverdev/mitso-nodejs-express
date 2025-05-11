import { NotFoundError } from '../errors/index.js';
export class BaseController {
    constructor(service) {
        this.service = service;
    }
    async getAll(req, res, next) {
        try {
            const items = await this.service.getAll();
            res.json(items);
        }
        catch (err) {
            next(err);
        }
    }
    async getById(req, res, next) {
        try {
            const item = await this.service.getById(req.params.id);
            if (!item) {
                throw new NotFoundError('Resource not found');
            }
            res.json(item);
        }
        catch (err) {
            next(err);
        }
    }
    async create(req, res, next) {
        try {
            const item = await this.service.create(req.body);
            res.status(201).json(item);
        }
        catch (err) {
            next(err);
        }
    }
    async update(req, res, next) {
        try {
            const item = await this.service.update(req.params.id, req.body);
            if (!item) {
                throw new NotFoundError('Resource not found');
            }
            res.json(item);
        }
        catch (err) {
            next(err);
        }
    }
    async remove(req, res, next) {
        try {
            await this.service.remove(req.params.id);
            res.status(204).send();
        }
        catch (err) {
            next(err);
        }
    }
}
//# sourceMappingURL=index.js.map