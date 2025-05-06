import { Router } from 'express';
import * as service from './tour.service.js';
import Tour from './tour.model.js';

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    const list = await service.getAll();
    res.json(list.map(Tour.toResponse));
  })
  .post(async (req, res) => {
    const t = await service.create(req.body);
    res.status(201).json(Tour.toResponse(t));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const t = await service.getById(req.params.id);
    res.json(Tour.toResponse(t));
  })
  .put(async (req, res) => {
    const t = await service.update(req.params.id, req.body);
    res.json(Tour.toResponse(t));
  })
  .delete(async (req, res) => {
    await service.remove(req.params.id);
    res.sendStatus(204);
  });

// Schedules of a tour
router.get('/:id/schedules', async (req, res) => {
  const all = await import('../schedules/schedule.service.js');
  const list = await all.getAll();
  const filtered = list.filter(s => s.tourId === req.params.id);
  res.json(filtered);
});

export default router;