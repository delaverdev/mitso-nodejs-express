import { v4 as uuidv4 } from 'uuid';
export default class Schedule {
    constructor({ id = uuidv4(), tourId, date, time } = {}) {
        this.id = id;
        this.tourId = tourId ?? '';
        this.date = date ?? '';
        this.time = time ?? '';
    }
    static toResponse(s) {
        const { id, tourId, date, time } = s;
        return { id, tourId, date, duration: parseInt(time) || 0 };
    }
}
//# sourceMappingURL=schedule.model.js.map