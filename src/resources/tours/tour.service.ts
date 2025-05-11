import repo from './tour.memory.repository.ts';
import scheduleRepo from '../schedules/schedule.memory.repository.ts';
import priceRepo from '../prices/price.memory.repository.ts';
import { ITour } from '../../types/types.ts';

const getAll = async () => {
  return repo.getAll();
};

const getById = async (id: string) => {
  const tour = await repo.getById(id);
  if (!tour) {
    throw new Error('Tour not found');
  }
  return tour;
};

const create = async (tourData: ITour) => {
  return repo.create(tourData);
};

const update = async (id: string, tourData: ITour) => {
  const tour = await repo.update(id, tourData);
  if (!tour) {
    throw new Error('Tour not found');
  }
  return tour;
};

const remove = async (id: string) => {
  const tour = await repo.remove(id);
  if (!tour) {
    throw new Error('Tour not found');
  }
  // Remove associated schedules and prices
  const schedules = await scheduleRepo.getByTourId(id);
  for (const schedule of schedules) {
    await scheduleRepo.remove(schedule.id);
    await priceRepo.removeByScheduleId(schedule.id);
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};