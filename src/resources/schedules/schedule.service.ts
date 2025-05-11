// src/resources/schedules/schedule.service.ts
import repo from './schedule.memory.repository.ts';
import tourRepo from '../tours/tour.memory.repository.ts';
import priceRepo from '../prices/price.memory.repository.ts';
import { ISchedule, IPrice } from '../../types/types.ts';

const getAll = async (tourId?: string) => {
  return tourId ? repo.getByTourId(tourId) : repo.getAll();
};

const getById = async (id: string) => {
  const schedule = await repo.getById(id);
  if (!schedule) {
    throw new Error('Schedule not found');
  }
  return schedule;
};

const getByTourId = async (tourId: string) => {
  return repo.getByTourId(tourId);
};

const create = async (scheduleData: ISchedule) => {
  const tour = await tourRepo.getById(scheduleData.tourId);
  if (!tour) {
    throw new Error('Tour not found');
  }
  return repo.create(scheduleData);
};

const update = async (id: string, scheduleData: ISchedule) => {
  const schedule = await repo.update(id, scheduleData);
  if (!schedule) {
    throw new Error('Schedule not found');
  }
  return schedule;
};

const remove = async (id: string) => {
  const schedule = await repo.remove(id);
  if (!schedule) {
    throw new Error('Schedule not found');
  }
  // Remove associated prices
  await priceRepo.removeByScheduleId(id);
};

export default {
  getAll,
  getById,
  getByTourId,
  create,
  update,
  remove
};

export async function getPrices(id: string): Promise<IPrice[]> {
  const schedule = await getById(id);
  if (!schedule) {
    throw { status: 404, message: 'Schedule not found' };
  }
  return priceRepo.getAll().then(prices => prices.filter(price => price.scheduleId === id));
}