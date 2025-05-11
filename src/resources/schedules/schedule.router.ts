// src/resources/schedules/schedule.router.ts
import { Router } from 'express';
import Schedule from './schedule.model.ts';
import service from './schedule.service.ts';
import {
  validateUuidParam,
  validateBody,
} from '../../common/validator.ts';

const router = Router();

// GET /api/schedules
router.get('/', async (req, res, next) => {
  try {
    const list = await service.getAll(req.query.tourId as string);
    res.json(list.map(Schedule.toResponse));
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

// POST /api/schedules
router.post(
  '/',
  validateBody(['tourId', 'date', 'time']),
  async (req, res, next) => {
    try {
      const s = await service.create(req.body);
      res.status(201).json(Schedule.toResponse(s));
    } catch (err: any) {
      res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
  }
);

// all routes below use :id
router.use('/:id', validateUuidParam('id'));

// GET /api/schedules/:id
router.get('/:id', async (req, res, next) => {
  try {
    const s = await service.getById(req.params.id);
    if (!s) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }
    res.json(Schedule.toResponse(s));
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

// PUT /api/schedules/:id
router.put(
  '/:id',
  validateBody(['date', 'time']),
  async (req, res, next) => {
    try {
      const s = await service.update(req.params.id, req.body);
      if (!s) {
        res.status(404).json({ error: 'Schedule not found' });
        return;
      }
      res.json(Schedule.toResponse(s));
    } catch (err: any) {
      res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
  }
);

// DELETE /api/schedules/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await service.remove(req.params.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

export default router;