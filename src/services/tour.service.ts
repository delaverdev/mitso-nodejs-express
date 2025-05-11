import { ITour, ISchedule } from '../types/types.ts';
import { ITourService } from './index.ts';
import { NotFoundError } from '../errors/index.ts';
import { TourRepository } from '../resources/tours/tour.repository';
import { ScheduleRepository } from '../resources/schedules/schedule.repository';

export class TourService implements ITourService {
  private repository: TourRepository;
  private scheduleRepository: ScheduleRepository;

  constructor() {
    this.repository = new TourRepository();
    this.scheduleRepository = new ScheduleRepository();
  }

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
    await this.repository.delete(id);
  }
} 