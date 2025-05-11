import { Router } from 'express';
import service from './tour.service.ts';
import Tour from './tour.model.ts';
import { validateUuidParam, validateBody } from '../../common/validator.ts';

const router = Router();

// GET /api/tours
router.get('/', async (req, res, next) => {
  try {
    const list = await service.getAll();
    res.json(list.map(Tour.toResponse));
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

// POST /api/tours
router.post(
  '/',
  validateBody(['name', 'description']),
  async (req, res, next) => {
    try {
      const t = await service.create(req.body);
      res.status(201).json(Tour.toResponse(t));
    } catch (err: any) {
      res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
  }
);

// all routes below use :id
router.use('/:id', validateUuidParam('id'));

// GET /api/tours/:id
router.get('/:id', async (req, res, next) => {
  try {
    const t = await service.getById(req.params.id);
    if (!t) {
      res.status(404).json({ error: 'Tour not found' });
      return;
    }
    res.json(Tour.toResponse(t));
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

// PUT /api/tours/:id
router.put(
  '/:id',
  validateBody(['name', 'description']),
  async (req, res, next) => {
    try {
      const t = await service.update(req.params.id, req.body);
      if (!t) {
        res.status(404).json({ error: 'Tour not found' });
        return;
      }
      res.json(Tour.toResponse(t));
    } catch (err: any) {
      res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    }
  }
);

// DELETE /api/tours/:id
router.delete('/:id', async (req, res, next) => {
  try {
    await service.remove(req.params.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  }
});

// Schedules of a tour
router.get('/:id/schedules', async (req, res) => {
  const all = await import('../schedules/schedule.service.ts');
  const schedules = await all.default.getByTourId(req.params.id);
  res.json(schedules);
});

export default router;