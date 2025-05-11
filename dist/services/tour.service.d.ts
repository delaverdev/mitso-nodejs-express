import { ITour, ISchedule } from '../types/index.js';
import { ITourService } from './index.js';
import { ITourRepository } from '../repositories/index.js';
import { IScheduleRepository } from '../repositories/index.js';
export declare class TourService implements ITourService {
    private repository;
    private scheduleRepository;
    constructor(repository: ITourRepository, scheduleRepository: IScheduleRepository);
    getAll(): Promise<ITour[]>;
    getById(id: string): Promise<ITour | null>;
    getSchedules(id: string): Promise<ISchedule[]>;
    create(tour: Partial<ITour>): Promise<ITour>;
    update(id: string, tour: Partial<ITour>): Promise<ITour | null>;
    remove(id: string): Promise<void>;
}
