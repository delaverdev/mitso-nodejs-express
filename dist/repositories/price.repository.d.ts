import { IPrice } from '../types/index.js';
import { IPriceRepository } from './index.js';
export declare class PriceRepository implements IPriceRepository {
    private prices;
    getAll(): Promise<IPrice[]>;
    getById(id: string): Promise<IPrice | null>;
    create(price: IPrice): Promise<IPrice>;
    update(id: string, price: IPrice): Promise<IPrice | null>;
    remove(id: string): Promise<IPrice | null>;
    removeByScheduleId(scheduleId: string): Promise<void>;
}
