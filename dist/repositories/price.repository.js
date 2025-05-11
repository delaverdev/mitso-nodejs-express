import { Price } from '../models/index.js';
import { generateId } from '../utils/index.js';
export class PriceRepository {
    constructor() {
        this.prices = [];
    }
    async getAll() {
        return this.prices;
    }
    async getById(id) {
        return this.prices.find(price => price.id === id) || null;
    }
    async create(price) {
        const newPrice = new Price({
            ...price,
            id: generateId()
        });
        this.prices.push(newPrice);
        return newPrice;
    }
    async update(id, price) {
        const index = this.prices.findIndex(p => p.id === id);
        if (index === -1) {
            return null;
        }
        this.prices[index] = price;
        return price;
    }
    async remove(id) {
        const index = this.prices.findIndex(price => price.id === id);
        if (index === -1) {
            return null;
        }
        const [removedPrice] = this.prices.splice(index, 1);
        return removedPrice;
    }
    async removeByScheduleId(scheduleId) {
        this.prices = this.prices.filter(price => price.scheduleId !== scheduleId);
    }
}
//# sourceMappingURL=price.repository.js.map