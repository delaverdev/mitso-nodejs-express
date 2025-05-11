import { IPrice } from '../types/index.js';
import { IPriceService } from './index.js';
import { IPriceRepository } from '../repositories/index.js';
import { IScheduleRepository } from '../repositories/index.js';
export declare class PriceService implements IPriceService {
    private repository;
    private scheduleRepository;
    constructor(repository: IPriceRepository, scheduleRepository: IScheduleRepository);
    getAll(scheduleId?: string): Promise<IPrice[]>;
    getById(id: string): Promise<IPrice | null>;
    create(price: Partial<IPrice>): Promise<IPrice>;
    update(id: string, price: Partial<IPrice>): Promise<IPrice | null>;
    remove(id: string): Promise<void>;
}
