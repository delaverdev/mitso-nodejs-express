import { Router } from 'express';
import * as service from './price.service.js';
import Price from './price.model.js';
import { validateUuidParam, validateBody } from '../../common/validator.js';
const router = Router();
router.get('/', async (req, res, next) => {
    try {
        const list = await service.getAll();
        res.json(list.map(Price.toResponse));
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
router.post('/', validateBody(['scheduleId', 'price', 'currency']), async (req, res, next) => {
    try {
        const p = await service.create(req.body);
        res.status(201).json(Price.toResponse(p));
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
router.use('/:id', validateUuidParam('id'));
router.get('/:id', async (req, res, next) => {
    try {
        const p = await service.getById(req.params.id);
        if (!p) {
            res.status(404).json({ error: 'Price not found' });
            return;
        }
        res.json(Price.toResponse(p));
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
router.put('/:id', validateBody(['price', 'currency']), async (req, res, next) => {
    try {
        const p = await service.update(req.params.id, req.body);
        if (!p) {
            res.status(404).json({ error: 'Price not found' });
            return;
        }
        res.json(Price.toResponse(p));
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        await service.remove(req.params.id);
        res.status(204).send();
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
export default router;
//# sourceMappingURL=price.router.js.map