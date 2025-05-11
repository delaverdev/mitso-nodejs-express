import { Router } from 'express';
import { validateUuidParam, validateBody } from '../../common/validator.js';
import * as service from './user.service.js';
const router = Router();
router.get('/', async (req, res, next) => {
    try {
        const list = await service.getAll();
        res.json(list);
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
});
router.get('/:id', validateUuidParam('id'), async (req, res, next) => {
    try {
        const user = await service.getById(req.params.id);
        res.json(user);
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
});
router.post('/', validateBody(['name', 'login', 'password']), async (req, res, next) => {
    try {
        const user = await service.create(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
});
router.put('/:id', validateUuidParam('id'), validateBody(['name', 'login', 'password']), async (req, res, next) => {
    try {
        const user = await service.update(req.params.id, req.body);
        res.json(user);
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
});
router.delete('/:id', validateUuidParam('id'), async (req, res, next) => {
    try {
        await service.remove(req.params.id);
        res.status(204).send();
    }
    catch (err) {
        res.status(err.status || 500).json({ error: err.message });
    }
});
export default router;
//# sourceMappingURL=user.router.js.map