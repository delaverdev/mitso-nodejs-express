import { v4 as uuidv4 } from 'uuid';

export default class Price {
  constructor({ id = uuidv4(), scheduleId, amount, currency } = {}) {
    this.id = id;
    this.scheduleId = scheduleId;
    this.amount = amount;
    this.currency = currency;
  }

  static toResponse(p) {
    const { id, scheduleId, amount, currency } = p;
    return { id, scheduleId, amount, currency };
  }
}