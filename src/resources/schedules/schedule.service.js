// src/resources/schedules/schedule.service.js
import * as repo from './schedule.memory.repository.js';
import * as tourRepo from '../tours/tour.memory.repository.js';
import * as priceRepo from '../prices/price.memory.repository.js';

export async function getAll(tourId) {
  const all = await repo.getAll();
  if (!tourId) return all;
  // убедиться, что тур существует
  if (!(await tourRepo.getById(tourId))) {
    throw { status: 404, message: 'Tour not found' };
  }
  return all.filter(s => s.tourId === tourId);
}

export async function getById(id) {
  const s = await repo.getById(id);
  if (!s) throw { status: 404, message: 'Schedule not found' };
  return s;
}

export async function create({ tourId, date, duration }) {
  // формат tourId и существование турa гарантирует middleware
  if (!date || duration == null) {
    throw { status: 400, message: 'Invalid schedule data' };
  }
  // cascade protection: убедимся, что тур есть
  if (!(await tourRepo.getById(tourId))) {
    throw { status: 404, message: 'Tour not found' };
  }
  return repo.create({ tourId, date, duration });
}

export async function update(id, { date, duration }) {
  const s = await repo.update(id, { date, duration });
  if (!s) throw { status: 404, message: 'Schedule not found' };
  return s;
}

export async function remove(id) {
  // cascade удаление цен
  await priceRepo.removeByScheduleId(id);
  if (!(await repo.remove(id))) {
    throw { status: 404, message: 'Schedule not found' };
  }
}