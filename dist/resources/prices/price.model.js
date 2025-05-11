import { v4 as uuidv4 } from 'uuid';
export default class Price {
    constructor({ id = uuidv4(), scheduleId, price, currency } = {}) {
        this.id = id;
        this.scheduleId = scheduleId ?? '';
        this.price = price ?? 0;
        this.currency = currency ?? '';
    }
    static toResponse(p) {
        const { id, scheduleId, price, currency } = p;
        return { id, scheduleId, price, currency };
    }
}
//# sourceMappingURL=price.model.js.map