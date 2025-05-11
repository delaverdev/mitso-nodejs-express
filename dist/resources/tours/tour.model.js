import { v4 as uuidv4 } from 'uuid';
export default class Tour {
    constructor({ id = uuidv4(), name, description } = {}) {
        this.id = id;
        this.name = name ?? '';
        this.description = description ?? '';
    }
    static toResponse(tour) {
        const { id, name, description } = tour;
        return { id, name, description };
    }
}
//# sourceMappingURL=tour.model.js.map