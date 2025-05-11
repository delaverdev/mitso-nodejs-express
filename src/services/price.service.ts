import { IPrice } from '../types/types.ts';
import { IPriceService } from './index.ts';
import { NotFoundError } from '../errors/index.ts';
import { PriceRepository } from '../resources/prices/price.repository';
import { ScheduleRepository } from '../resources/schedules/schedule.repository';

export class PriceService implements IPriceService {
  private repository: PriceRepository;
  private scheduleRepository: ScheduleRepository;

  constructor() {
    this.repository = new PriceRepository();
    this.scheduleRepository = new ScheduleRepository();
  }

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
    await this.repository.delete(id);
  }
} 