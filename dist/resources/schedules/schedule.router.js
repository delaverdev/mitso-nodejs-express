import { Router } from 'express';
import Schedule from './schedule.model.js';
import * as service from './schedule.service.js';
import { validateUuidParam, validateBody, } from '../../common/validator.js';
const router = Router();
router.get('/', async (req, res, next) => {
    try {
        const list = await service.getAll(req.query.tourId);
        res.json(list.map(Schedule.toResponse));
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
router.post('/', validateBody(['tourId', 'date', 'time']), async (req, res, next) => {
    try {
        const s = await service.create(req.body);
        res.status(201).json(Schedule.toResponse(s));
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
router.use('/:id', validateUuidParam('id'));
router.get('/:id', async (req, res, next) => {
    try {
        const s = await service.getById(req.params.id);
        if (!s) {
            res.status(404).json({ error: 'Schedule not found' });
            return;
        }
        res.json(Schedule.toResponse(s));
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
router.put('/:id', validateBody(['date', 'time']), async (req, res, next) => {
    try {
        const s = await service.update(req.params.id, req.body);
        if (!s) {
            res.status(404).json({ error: 'Schedule not found' });
            return;
        }
        res.json(Schedule.toResponse(s));
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
//# sourceMappingURL=schedule.router.js.map