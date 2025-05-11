import repo from './tour.memory.repository.js';
import scheduleRepo from '../schedules/schedule.memory.repository.js';
import priceRepo from '../prices/price.memory.repository.js';
export async function getAll() {
    return repo.getAll();
}
export async function getById(id) {
    const t = await repo.getById(id);
    if (!t) {
        throw { status: 404, message: 'Tour not found' };
    }
    return t;
}
export async function create(data) {
    if (!data.name || !data.description) {
        throw { status: 400, message: 'Missing required fields' };
    }
    return repo.createTour(data);
}
export async function update(id, data) {
    const t = await repo.updateTour(id, data);
    if (!t) {
        throw { status: 404, message: 'Tour not found' };
    }
    return t;
}
export async function remove(id) {
    const schedules = await scheduleRepo.getAll();
    const toDel = schedules.filter(s => s.tourId === id).map(s => s.id);
    for (const sid of toDel) {
        await scheduleRepo.deleteSchedule(sid);
        await priceRepo.removeByScheduleId(sid);
    }
    if (!(await repo.deleteTour(id))) {
        throw { status: 404, message: 'Tour not found' };
    }
}
//# sourceMappingURL=tour.service.js.map