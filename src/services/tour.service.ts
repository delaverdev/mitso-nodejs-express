import { ITour, ISchedule } from '../types/types.ts';
import { ITourService } from './index.ts';
import { ITourRepository } from '../repositories/index.ts';
import { IScheduleRepository } from '../repositories/index.ts';
import { NotFoundError } from '../errors/index.ts';

export class TourService implements ITourService {
  constructor(
    private repository: ITourRepository,
    private scheduleRepository: IScheduleRepository
  ) {}

  async getAll(): Promise<ITour[]> {
    return this.repository.getAll();
  }

  async getById(id: string): Promise<ITour | null> {
    return this.repository.getById(id);
  }

  async getSchedules(id: string): Promise<ISchedule[]> {
    const tour = await this.repository.getById(id);
    if (!tour) {
      throw new NotFoundError('Tour not found');
    }
    return this.scheduleRepository.getAll().then(schedules =>
      schedules.filter(schedule => schedule.tourId === id)
    );
  }

  async create(tour: Partial<ITour>): Promise<ITour> {
    if (!tour.name || !tour.description) {
      throw new Error('Missing required fields');
    }
    return this.repository.create(tour as ITour);
  }

  async update(id: string, tour: Partial<ITour>): Promise<ITour | null> {
    const existingTour = await this.repository.getById(id);
    if (!existingTour) {
      throw new NotFoundError('Tour not found');
    }
    return this.repository.update(id, { ...existingTour, ...tour });
  }

  async remove(id: string): Promise<void> {
    const tour = await this.repository.getById(id);
    if (!tour) {
      throw new NotFoundError('Tour not found');
    }
    const schedules = await this.scheduleRepository.getAll();
    const tourSchedules = schedules.filter(schedule => schedule.tourId === id);
    for (const schedule of tourSchedules) {
      await this.scheduleRepository.remove(schedule.id);
    }
    await this.repository.remove(id);
  }
} 