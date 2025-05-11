import { NotFoundError } from '../errors/index.js';
export class PriceService {
    constructor(repository, scheduleRepository) {
        this.repository = repository;
        this.scheduleRepository = scheduleRepository;
    }
    async getAll(scheduleId) {
        const prices = await this.repository.getAll();
        return scheduleId ? prices.filter(price => price.scheduleId === scheduleId) : prices;
    }
    async getById(id) {
        return this.repository.getById(id);
    }
    async create(price) {
        if (!price.scheduleId || !price.price || !price.currency) {
            throw new Error('Missing required fields');
        }
        const schedule = await this.scheduleRepository.getById(price.scheduleId);
        if (!schedule) {
            throw new NotFoundError('Schedule not found');
        }
        return this.repository.create(price);
    }
    async update(id, price) {
        const existingPrice = await this.repository.getById(id);
        if (!existingPrice) {
            throw new NotFoundError('Price not found');
        }
        if (price.scheduleId) {
            const schedule = await this.scheduleRepository.getById(price.scheduleId);
            if (!schedule) {
                throw new NotFoundError('Schedule not found');
            }
        }
        return this.repository.update(id, { ...existingPrice, ...price });
    }
    async remove(id) {
        const price = await this.repository.getById(id);
        if (!price) {
            throw new NotFoundError('Price not found');
        }
        await this.repository.remove(id);
    }
}
//# sourceMappingURL=price.service.js.map