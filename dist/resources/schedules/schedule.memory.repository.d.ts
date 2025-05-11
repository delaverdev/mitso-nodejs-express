import { ISchedule } from '../../types/index.js';
declare const _default: {
    getAll: () => Promise<ISchedule[]>;
    getById: (id: string) => Promise<ISchedule | null>;
    createSchedule: (schedule: ISchedule) => Promise<ISchedule>;
    updateSchedule: (id: string, schedule: ISchedule) => Promise<ISchedule | null>;
    deleteSchedule: (id: string) => Promise<ISchedule | null>;
};
export default _default;
