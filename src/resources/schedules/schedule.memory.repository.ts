import Schedule from './schedule.model.ts';
import { ISchedule } from '../../types/types.ts';

const schedules: ISchedule[] = [];

const getAll = async (): Promise<ISchedule[]> => {
  return schedules;
};

const getById = async (id: string): Promise<ISchedule | null> => {
  return schedules.find(schedule => schedule.id === id) || null;
};

const getByTourId = async (tourId: string): Promise<ISchedule[]> => {
  return schedules.filter(schedule => schedule.tourId === tourId);
};

const create = async (scheduleData: ISchedule): Promise<ISchedule> => {
  const schedule = new Schedule(scheduleData);
  schedules.push(schedule);
  return schedule;
};

const update = async (id: string, scheduleData: ISchedule): Promise<ISchedule | null> => {
  const index = schedules.findIndex(schedule => schedule.id === id);
  if (index === -1) return null;
  const schedule = new Schedule({ ...scheduleData, id });
  schedules[index] = schedule;
  return schedule;
};

const remove = async (id: string): Promise<ISchedule | null> => {
  const index = schedules.findIndex(schedule => schedule.id === id);
  if (index === -1) return null;
  const schedule = schedules[index];
  schedules.splice(index, 1);
  return schedule;
};

export default {
  getAll,
  getById,
  getByTourId,
  create,
  update,
  remove
};