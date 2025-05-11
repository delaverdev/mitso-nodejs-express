import { Tour } from '../models/index.js';
import { generateId } from '../utils/index.js';
export class TourRepository {
    constructor() {
        this.tours = [];
    }
    async getAll() {
        return this.tours;
    }
    async getById(id) {
        return this.tours.find(tour => tour.id === id) || null;
    }
    async create(tour) {
        const newTour = new Tour({
            ...tour,
            id: generateId()
        });
        this.tours.push(newTour);
        return newTour;
    }
    async update(id, tour) {
        const index = this.tours.findIndex(t => t.id === id);
        if (index === -1) {
            return null;
        }
        this.tours[index] = tour;
        return tour;
    }
    async remove(id) {
        const index = this.tours.findIndex(tour => tour.id === id);
        if (index === -1) {
            return null;
        }
        const [removedTour] = this.tours.splice(index, 1);
        return removedTour;
    }
}
//# sourceMappingURL=tour.repository.js.map