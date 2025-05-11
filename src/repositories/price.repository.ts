import { IPrice } from '../types/types.ts';
import { IPriceRepository } from './index.ts';
import  Price  from '../resources/prices/price.model.ts';
import { generateId } from '../utils/index.ts';

export class PriceRepository implements IPriceRepository {
  private prices: IPrice[] = [];

  async getAll(): Promise<IPrice[]> {
    return this.prices;
  }

  async getById(id: string): Promise<IPrice | null> {
    return this.prices.find(price => price.id === id) || null;
  }

  async create(price: IPrice): Promise<IPrice> {
    const newPrice = new Price({
      ...price,
      id: generateId()
    });
    this.prices.push(newPrice);
    return newPrice;
  }

  async update(id: string, price: IPrice): Promise<IPrice | null> {
    const index = this.prices.findIndex(p => p.id === id);
    if (index === -1) {
      return null;
    }
    this.prices[index] = price;
    return price;
  }

  async remove(id: string): Promise<IPrice | null> {
    const index = this.prices.findIndex(price => price.id === id);
    if (index === -1) {
      return null;
    }
    const [removedPrice] = this.prices.splice(index, 1);
    return removedPrice;
  }

  async removeByScheduleId(scheduleId: string): Promise<void> {
    this.prices = this.prices.filter(price => price.scheduleId !== scheduleId);
  }
} 