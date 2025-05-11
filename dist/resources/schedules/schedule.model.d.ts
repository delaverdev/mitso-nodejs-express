import { ISchedule, IScheduleResponse } from '../../types/index.js';
export default class Schedule implements ISchedule {
    id: string;
    tourId: string;
    date: string;
    time: string;
    constructor({ id, tourId, date, time }?: Partial<ISchedule>);
    static toResponse(s: ISchedule): IScheduleResponse;
}
