import * as repo from './tour.memory.repository.js';
import * as scheduleRepo from '../schedules/schedule.memory.repository.js';
import * as priceRepo from '../prices/price.memory.repository.js';

export async function getAll() {
  return repo.getAll();
}

export async function getById(id) {
  const t = await repo.getById(id);
  if (!t) throw { status: 404, message: 'Tour not found' };
  return t;
}

export async function create(data) {
  if (!data.name || !data.description) {
    throw { status: 400, message: 'Invalid tour data' };
  }
  return repo.create(data);
}

export async function update(id, data) {
  const t = await repo.update(id, data);
  if (!t) throw { status: 404, message: 'Tour not found' };
  return t;
}

export async function remove(id) {
  // Cascade delete schedules and prices
  const schedules = await scheduleRepo.getAll();
  const toDel = schedules.filter(s => s.tourId === id).map(s => s.id);
  for (const sid of toDel) {
    await scheduleRepo.remove(sid);
    await priceRepo.removeByScheduleId(sid);
  }
  if (!(await repo.remove(id))) {
    throw { status: 404, message: 'Tour not found' };
  }
}