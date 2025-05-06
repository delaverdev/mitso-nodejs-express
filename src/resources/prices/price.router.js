// src/resources/prices/price.router.js
import { Router } from 'express';
import * as service from './price.service.js';
import Price from './price.model.js';
import { validateUuidParam, validateBody } from '../../common/validator.js';

const router = Router();

// GET /api/prices
router.get('/', async (req, res) => {
  try {
    const list = await service.getAll();
    res.json(list.map(Price.toResponse));
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

// POST /api/prices
router.post(
  '/',
  validateBody(['scheduleId', 'amount', 'currency']),
  (req, res, next) => validateUuidParam('scheduleId', 'body')(req, res, next),
  async (req, res) => {
    try {
      const p = await service.create(req.body);
      res.status(201).json(Price.toResponse(p));
    } catch (err) {
      res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
  }
);

// all routes below use :id
router.use('/:id', validateUuidParam('id'));

// GET /api/prices/:id
router.get('/:id', async (req, res) => {
  try {
    const p = await service.getById(req.params.id);
    res.json(Price.toResponse(p));
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

// PUT /api/prices/:id
router.put(
  '/:id',
  validateBody(['amount', 'currency']),
  async (req, res) => {
    try {
      const p = await service.update(req.params.id, req.body);
      res.json(Price.toResponse(p));
    } catch (err) {
      res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
  }
);

// DELETE /api/prices/:id
router.delete('/:id', async (req, res) => {
  try {
    await service.remove(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

export default router;