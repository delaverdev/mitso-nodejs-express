import { NotFoundError } from '../errors/index.js';
export class TourService {
    constructor(repository, scheduleRepository) {
        this.repository = repository;
        this.scheduleRepository = scheduleRepository;
    }
    async getAll() {
        return this.repository.getAll();
    }
    async getById(id) {
        return this.repository.getById(id);
    }
    async getSchedules(id) {
        const tour = await this.repository.getById(id);
        if (!tour) {
            throw new NotFoundError('Tour not found');
        }
        return this.scheduleRepository.getAll().then(schedules => schedules.filter(schedule => schedule.tourId === id));
    }
    async create(tour) {
        if (!tour.name || !tour.description) {
            throw new Error('Missing required fields');
        }
        return this.repository.create(tour);
    }
    async update(id, tour) {
        const existingTour = await this.repository.getById(id);
        if (!existingTour) {
            throw new NotFoundError('Tour not found');
        }
        return this.repository.update(id, { ...existingTour, ...tour });
    }
    async remove(id) {
        const tour = await this.repository.getById(id);
        if (!tour) {
            throw new NotFoundError('Tour not found');
        }
        const schedules = await this.scheduleRepository.getAll();
        const tourSchedules = schedules.filter(schedule => schedule.tourId === id);
        for (const schedule of tourSchedules) {
            await this.scheduleRepository.remove(schedule.id);
        }
        await this.repository.remove(id);
    }
}
//# sourceMappingURL=tour.service.js.map