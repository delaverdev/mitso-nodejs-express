import { v4 as uuidv4 } from 'uuid';
import { ISchedule, IScheduleResponse } from '../../types/types.ts';

class Schedule implements ISchedule {
  id: string;
  tourId: string;
  date: string;
  time: string;

  constructor({ id = uuidv4(), tourId, date, time }: Partial<ISchedule> = {}) {
    this.id = id;
    this.tourId = tourId ?? '';
    this.date = date ?? '';
    this.time = time ?? '';
  }

  static toResponse(s: ISchedule): IScheduleResponse {
    const { id, tourId, date, time } = s;
    return { id, tourId, date, time };
  }
}

export default Schedule;