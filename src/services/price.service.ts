import { IPrice } from '../types/types.ts';
import { IPriceService } from './index.ts';
import { IPriceRepository } from '../repositories/index.ts';
import { IScheduleRepository } from '../repositories/index.ts';
import { NotFoundError } from '../errors/index.ts';

export class PriceService implements IPriceService {
  constructor(
    private repository: IPriceRepository,
    private scheduleRepository: IScheduleRepository
  ) {}

  async getAll(scheduleId?: string): Promise<IPrice[]> {
    const prices = await this.repository.getAll();
    return scheduleId ? prices.filter(price => price.scheduleId === scheduleId) : prices;
  }

  async getById(id: string): Promise<IPrice | null> {
    return this.repository.getById(id);
  }

  async create(price: Partial<IPrice>): Promise<IPrice> {
    if (!price.scheduleId || !price.price || !price.currency) {
      throw new Error('Missing required fields');
    }
    const schedule = await this.scheduleRepository.getById(price.scheduleId);
    if (!schedule) {
      throw new NotFoundError('Schedule not found');
    }
    return this.repository.create(price as IPrice);
  }

  async update(id: string, price: Partial<IPrice>): Promise<IPrice | null> {
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

  async remove(id: string): Promise<void> {
    const price = await this.repository.getById(id);
    if (!price) {
      throw new NotFoundError('Price not found');
    }
    await this.repository.remove(id);
  }
} 