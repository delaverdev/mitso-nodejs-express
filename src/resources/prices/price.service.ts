import { PriceRepository } from './price.repository';
import { IPrice, IPriceResponse } from '../../types/types';

const priceRepository = new PriceRepository();

const getAll = async (): Promise<IPriceResponse[]> => {
  return priceRepository.getAll();
};

const getById = async (id: string): Promise<IPriceResponse> => {
  const price = await priceRepository.getById(id);
  if (!price) {
    throw new Error('Price not found');
  }
  return price;
};

const create = async (priceData: Omit<IPrice, 'id'>): Promise<IPriceResponse> => {
  return priceRepository.create(priceData);
};

const update = async (id: string, priceData: Partial<IPrice>): Promise<IPriceResponse> => {
  const price = await priceRepository.update(id, priceData);
  if (!price) {
    throw new Error('Price not found');
  }
  return price;
};

const remove = async (id: string): Promise<void> => {
  const success = await priceRepository.delete(id);
  if (!success) {
    throw new Error('Price not found');
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};