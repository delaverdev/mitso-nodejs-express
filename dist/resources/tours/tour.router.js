import { Router } from 'express';
import * as service from './tour.service.js';
import Tour from './tour.model.js';
import { validateUuidParam, validateBody } from '../../common/validator.js';
const router = Router();
router.get('/', async (req, res, next) => {
    try {
        const list = await service.getAll();
        res.json(list.map(Tour.toResponse));
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
router.post('/', validateBody(['name', 'description']), async (req, res, next) => {
    try {
        const t = await service.create(req.body);
        res.status(201).json(Tour.toResponse(t));
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
router.use('/:id', validateUuidParam('id'));
router.get('/:id', async (req, res, next) => {
    try {
        const t = await service.getById(req.params.id);
        if (!t) {
            res.status(404).json({ error: 'Tour not found' });
            return;
        }
        res.json(Tour.toResponse(t));
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
});
router.put('/:id', validateBody(['name', 'description']), async (req, res, next) => {
    try {
        const t = await service.update(req.params.id, req.body);
        if (!t) {
            res.status(404).json({ error: 'Tour not found' });
            return;
        }
        res.json(Tour.toResponse(t));
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
router.get('/:id/schedules', async (req, res) => {
    const all = await import('../schedules/schedule.service.js');
    const list = await all.getAll();
    const filtered = list.filter(s => s.tourId === req.params.id);
    res.json(filtered);
});
export default router;
//# sourceMappingURL=tour.router.js.map