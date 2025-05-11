// src/resources/schedules/schedule.service.ts
import { ScheduleRepository } from './schedule.repository';
import { TourRepository } from '../tours/tour.repository';
import { PriceRepository } from '../prices/price.repository';
import { ISchedule, IPrice, IScheduleResponse } from '../../types/types';

const scheduleRepository = new ScheduleRepository();
const tourRepository = new TourRepository();
const priceRepository = new PriceRepository();

const getAll = async (tourId?: string): Promise<IScheduleResponse[]> => {
  return scheduleRepository.getAll();
};

const getById = async (id: string): Promise<IScheduleResponse> => {
  const schedule = await scheduleRepository.getById(id);
  if (!schedule) {
    throw new Error('Schedule not found');
  }
  return schedule;
};

const getByTourId = async (tourId: string) => {
  return scheduleRepository.getByTourId(tourId);
};

const create = async (scheduleData: Omit<ISchedule, 'id'>): Promise<IScheduleResponse> => {
  const tour = await tourRepository.getById(scheduleData.tourId);
  if (!tour) {
    throw new Error('Tour not found');
  }
  return scheduleRepository.create(scheduleData);
};

const update = async (id: string, scheduleData: Partial<ISchedule>): Promise<IScheduleResponse> => {
  const schedule = await scheduleRepository.update(id, scheduleData);
  if (!schedule) {
    throw new Error('Schedule not found');
  }
  return schedule;
};

const remove = async (id: string): Promise<void> => {
  const success = await scheduleRepository.delete(id);
  if (!success) {
    throw new Error('Schedule not found');
  }
  // Remove associated prices
  await priceRepository.delete(id);
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
  return priceRepository.getByScheduleId(schedule.id);
}