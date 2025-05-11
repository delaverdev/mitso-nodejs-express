import { ISchedule } from '../types/index.js';
import { IScheduleRepository } from './index.js';
export declare class ScheduleRepository implements IScheduleRepository {
    private schedules;
    getAll(): Promise<ISchedule[]>;
    getById(id: string): Promise<ISchedule | null>;
    create(schedule: ISchedule): Promise<ISchedule>;
    update(id: string, schedule: ISchedule): Promise<ISchedule | null>;
    remove(id: string): Promise<ISchedule | null>;
}
