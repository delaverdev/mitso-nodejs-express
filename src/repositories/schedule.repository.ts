import { ISchedule } from '../types/types.ts';
import { IScheduleRepository } from './index.ts';
import  Schedule  from '../resources/schedules/schedule.model.ts';
import { generateId } from '../utils/index.ts';

export class ScheduleRepository implements IScheduleRepository {
  private schedules: ISchedule[] = [];

  async getAll(): Promise<ISchedule[]> {
    return this.schedules;
  }

  async getById(id: string): Promise<ISchedule | null> {
    return this.schedules.find(schedule => schedule.id === id) || null;
  }

  async create(schedule: ISchedule): Promise<ISchedule> {
    const newSchedule = new Schedule({
      ...schedule,
      id: generateId()
    });
    this.schedules.push(newSchedule);
    return newSchedule;
  }

  async update(id: string, schedule: ISchedule): Promise<ISchedule | null> {
    const index = this.schedules.findIndex(s => s.id === id);
    if (index === -1) {
      return null;
    }
    this.schedules[index] = schedule;
    return schedule;
  }

  async remove(id: string): Promise<ISchedule | null> {
    const index = this.schedules.findIndex(schedule => schedule.id === id);
    if (index === -1) {
      return null;
    }
    const [removedSchedule] = this.schedules.splice(index, 1);
    return removedSchedule;
  }
} 