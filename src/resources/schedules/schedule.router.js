// src/resources/schedules/schedule.router.js
import { Router } from 'express';
import Schedule from './schedule.model.js';
import * as service from './schedule.service.js';
import {
  validateUuidParam,
  validateBody,
} from '../../common/validator.js';

const router = Router();

// GET /api/schedules?tourId=...
router.get(
  '/',
  (req, res, next) => {
    if (req.query.tourId) {
      // проверим формат tourId
      validateUuidParam('tourId', 'query')(req, res, next);
    } else next();
  },
  async (req, res) => {
    try {
      const list = await service.getAll(req.query.tourId);
      res.json(list.map(Schedule.toResponse));
    } catch (err) {
      res.status(err.status || 500).json({ error: err.message });
    }
  }
);

// POST /api/schedules
router.post(
    '/',
  validateBody(['tourId', 'date', 'duration']),
  (req, res, next) => validateUuidParam('tourId', 'body')(req, res, next),
  async (req, res) => {
    try {
      const s = await service.create(req.body);
      res.status(201).json(Schedule.toResponse(s));
    } catch (err) {
      res.status(err.status || 500).json({ error: err.message });
    }
  }
);

// GET /api/schedules/:id
router.get(
  '/:id',
  validateUuidParam('id'),
  async (req, res) => {
    try {
      const s = await service.getById(req.params.id);
      res.json(Schedule.toResponse(s));
    } catch (err) {
      res.status(err.status || 500).json({ error: err.message });
    }
  }
);

// PUT /api/schedules/:id
router.put(
  '/:id',
  validateUuidParam('id'),
  validateBody(['date', 'duration']),
  async (req, res) => {
    try {
      const s = await service.update(req.params.id, req.body);
      res.json(Schedule.toResponse(s));
    } catch (err) {
      res.status(err.status || 500).json({ error: err.message });
    }
  }
);

// DELETE /api/schedules/:id
router.delete(
  '/:id',
  validateUuidParam('id'),
  async (req, res) => {
    try {
      await service.remove(req.params.id);
      res.sendStatus(204);
    } catch (err) {
      res.status(err.status || 500).json({ error: err.message });
    }
  }
);

export default router;