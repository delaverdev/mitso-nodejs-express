import { Router } from 'express';
import { validateUuidParam, validateBody } from '../../common/validator.ts';
import service from './user.service.ts';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const list = await service.getAll();
    res.json(list);
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

router.get('/:id', validateUuidParam('id'), async (req, res, next) => {
  try {
    const user = await service.getById(req.params.id);
    res.json(user);
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

router.post('/', validateBody(['name', 'login', 'password']), async (req, res, next) => {
  try {
    const user = await service.create(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

router.put(
  '/:id',
  validateUuidParam('id'),
  validateBody(['name', 'login', 'password']),
  async (req, res, next) => {
    try {
      const user = await service.update(req.params.id, req.body);
      res.json(user);
    } catch (err: any) {
      res.status(err.status || 500).json({ error: err.message });
    }
  }
);

router.delete('/:id', validateUuidParam('id'), async (req, res, next) => {
  try {
    await service.remove(req.params.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

export default router;