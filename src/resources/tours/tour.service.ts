import { TourRepository } from './tour.repository';
import { ITour, ITourResponse } from '../../types/types';

const tourRepository = new TourRepository();

const getAll = async (): Promise<ITourResponse[]> => {
  return tourRepository.getAll();
};

const getById = async (id: string): Promise<ITourResponse> => {
  const tour = await tourRepository.getById(id);
  if (!tour) {
    throw new Error('Tour not found');
  }
  return tour;
};

const create = async (tourData: Omit<ITour, 'id'>): Promise<ITourResponse> => {
  return tourRepository.create(tourData);
};

const update = async (id: string, tourData: Partial<ITour>): Promise<ITourResponse> => {
  const tour = await tourRepository.update(id, tourData);
  if (!tour) {
    throw new Error('Tour not found');
  }
  return tour;
};

const remove = async (id: string): Promise<void> => {
  const success = await tourRepository.delete(id);
  if (!success) {
    throw new Error('Tour not found');
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};