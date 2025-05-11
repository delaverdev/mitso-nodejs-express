import { ITour } from '../types/index.js';
import { ITourRepository } from './index.js';
export declare class TourRepository implements ITourRepository {
    private tours;
    getAll(): Promise<ITour[]>;
    getById(id: string): Promise<ITour | null>;
    create(tour: ITour): Promise<ITour>;
    update(id: string, tour: ITour): Promise<ITour | null>;
    remove(id: string): Promise<ITour | null>;
}
