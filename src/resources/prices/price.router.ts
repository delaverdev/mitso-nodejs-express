// src/resources/prices/price.router.ts
import { Router } from 'express';
import service from './price.service.ts';
import Price from './price.model.ts';
import { validateUuidParam, validateBody } from '../../common/validator.ts';

const router = Router();

// GET /api/prices
router.get('/', async (req, res, next) => {
  try {
    const list = await service.getAll();
    res.json(list.map(Price.toResponse));
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

// POST /api/prices
router.post(
  '/',
  validateBody(['scheduleId', 'price', 'currency']),
  async (req, res, next) => {
    try {
      const p = await service.create(req.body);
      res.status(201).json(Price.toResponse(p));
    } catch (err: any) {
      res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
  }
);

// all routes below use :id
router.use('/:id', validateUuidParam('id'));

// GET /api/prices/:id
router.get('/:id', async (req, res, next) => {
  try {
    const p = await service.getById(req.params.id);
    if (!p) {
      res.status(404).json({ error: 'Price not found' });
      return;
    }
    res.json(Price.toResponse(p));
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

// PUT /api/prices/:id
router.put(
  '/:id',
  validateBody(['price', 'currency']),
  async (req, res, next) => {
    try {
      const p = await service.update(req.params.id, req.body);
      if (!p) {
        res.status(404).json({ error: 'Price not found' });
        return;
      }
      res.json(Price.toResponse(p));
    } catch (err: any) {
      res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
  }
);

// DELETE /api/prices/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await service.remove(req.params.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

export default router;