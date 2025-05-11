import { ISchedule, IPrice } from '../../types/index.js';
export declare function getAll(tourId?: string): Promise<ISchedule[]>;
export declare function getById(id: string): Promise<ISchedule | null>;
export declare function create({ tourId, date, time }: Partial<ISchedule>): Promise<ISchedule>;
export declare function update(id: string, { date, time }: Partial<ISchedule>): Promise<ISchedule | null>;
export declare function remove(id: string): Promise<void>;
export declare function getPrices(id: string): Promise<IPrice[]>;
