import { Schedule } from '../models/index.js';
import { generateId } from '../utils/index.js';
export class ScheduleRepository {
    constructor() {
        this.schedules = [];
    }
    async getAll() {
        return this.schedules;
    }
    async getById(id) {
        return this.schedules.find(schedule => schedule.id === id) || null;
    }
    async create(schedule) {
        const newSchedule = new Schedule({
            ...schedule,
            id: generateId()
        });
        this.schedules.push(newSchedule);
        return newSchedule;
    }
    async update(id, schedule) {
        const index = this.schedules.findIndex(s => s.id === id);
        if (index === -1) {
            return null;
        }
        this.schedules[index] = schedule;
        return schedule;
    }
    async remove(id) {
        const index = this.schedules.findIndex(schedule => schedule.id === id);
        if (index === -1) {
            return null;
        }
        const [removedSchedule] = this.schedules.splice(index, 1);
        return removedSchedule;
    }
}
//# sourceMappingURL=schedule.repository.js.map