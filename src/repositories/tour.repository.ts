import { ITour } from '../types/types.ts';
import { ITourRepository } from './index.ts';
import Tour  from '../resources/tours/tour.model.ts';
import { generateId } from '../utils/index.ts';

export class TourRepository implements ITourRepository {
  private tours: ITour[] = [];

  async getAll(): Promise<ITour[]> {
    return this.tours;
  }

  async getById(id: string): Promise<ITour | null> {
    return this.tours.find(tour => tour.id === id) || null;
  }

  async create(tour: ITour): Promise<ITour> {
    const newTour = new Tour({
      ...tour,
      id: generateId()
    });
    this.tours.push(newTour);
    return newTour;
  }

  async update(id: string, tour: ITour): Promise<ITour | null> {
    const index = this.tours.findIndex(t => t.id === id);
    if (index === -1) {
      return null;
    }
    this.tours[index] = tour;
    return tour;
  }

  async remove(id: string): Promise<ITour | null> {
    const index = this.tours.findIndex(tour => tour.id === id);
    if (index === -1) {
      return null;
    }
    const [removedTour] = this.tours.splice(index, 1);
    return removedTour;
  }
} 