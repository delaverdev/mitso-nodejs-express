import repo from './schedule.memory.repository.js';
import tourRepo from '../tours/tour.memory.repository.js';
import priceRepo from '../prices/price.memory.repository.js';
export async function getAll(tourId) {
    const all = await repo.getAll();
    if (tourId) {
        if (!(await tourRepo.getById(tourId))) {
            throw { status: 404, message: 'Tour not found' };
        }
        return all.filter(s => s.tourId === tourId);
    }
    return all;
}
export async function getById(id) {
    const s = await repo.getById(id);
    if (!s) {
        throw { status: 404, message: 'Schedule not found' };
    }
    return s;
}
export async function create({ tourId, date, time }) {
    if (!date || !time) {
        throw { status: 400, message: 'Missing required fields' };
    }
    if (!(await tourRepo.getById(tourId))) {
        throw { status: 404, message: 'Tour not found' };
    }
    return repo.createSchedule({ tourId: tourId, date, time });
}
export async function update(id, { date, time }) {
    const s = await repo.updateSchedule(id, { date, time });
    if (!s) {
        throw { status: 404, message: 'Schedule not found' };
    }
    return s;
}
export async function remove(id) {
    await priceRepo.removeByScheduleId(id);
    if (!(await repo.deleteSchedule(id))) {
        throw { status: 404, message: 'Schedule not found' };
    }
}
export async function getPrices(id) {
    const schedule = await getById(id);
    if (!schedule) {
        throw { status: 404, message: 'Schedule not found' };
    }
    return priceRepo.getAll().then(prices => prices.filter(price => price.scheduleId === id));
}
//# sourceMappingURL=schedule.service.js.map