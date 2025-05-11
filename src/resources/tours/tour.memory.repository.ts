import Tour from './tour.model.ts';
import { ITour } from '../../types/types.ts';

const tours: ITour[] = [];

const getAll = async (): Promise<ITour[]> => {
  return tours;
};

const getById = async (id: string): Promise<ITour | null> => {
  return tours.find(tour => tour.id === id) || null;
};

const create = async (tourData: ITour): Promise<ITour> => {
  const tour = new Tour(tourData);
  tours.push(tour);
  return tour;
};

const update = async (id: string, tourData: ITour): Promise<ITour | null> => {
  const index = tours.findIndex(tour => tour.id === id);
  if (index === -1) return null;
  const tour = new Tour({ ...tourData, id });
  tours[index] = tour;
  return tour;
};

const remove = async (id: string): Promise<ITour | null> => {
  const index = tours.findIndex(tour => tour.id === id);
  if (index === -1) return null;
  const tour = tours[index];
  tours.splice(index, 1);
  return tour;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};