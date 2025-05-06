import { v4 as uuidv4 } from 'uuid';

export default class Schedule {
  constructor({ id = uuidv4(), tourId, date, duration } = {}) {
    this.id = id;
    this.tourId = tourId;
    this.date = date;
    this.duration = duration;
  }

  static toResponse(s) {
    const { id, tourId, date, duration } = s;
    return { id, tourId, date, duration };
  }
}