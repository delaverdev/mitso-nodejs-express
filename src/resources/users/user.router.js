import { Router } from 'express';
import * as service from './user.service.js';

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    const list = await service.getAll();
    res.json(list);
  })
  .post(async (req, res) => {
    const u = await service.create(req.body);
    res.status(201).json(u);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const u = await service.getById(req.params.id);
    res.json(u);
  })
  .put(async (req, res) => {
    const u = await service.update(req.params.id, req.body);
    res.json(u);
  })
  .delete(async (req, res) => {
    await service.remove(req.params.id);
    res.sendStatus(204);
  });

export default router;