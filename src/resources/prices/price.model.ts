import { v4 as uuidv4 } from 'uuid';
import { IPrice, IPriceResponse } from '../../types/types.ts';

export default class Price implements IPrice {
  id: string;
  scheduleId: string;
  price: number;
  currency: string;

  constructor({ id = uuidv4(), scheduleId, price, currency }: Partial<IPrice> = {}) {
    this.id = id;
    this.scheduleId = scheduleId ?? '';
    this.price = price ?? 0;
    this.currency = currency ?? '';
  }

  static toResponse(p: IPrice): IPriceResponse {
    const { id, scheduleId, price, currency } = p;
    return { id, scheduleId, price, currency };
  }
}