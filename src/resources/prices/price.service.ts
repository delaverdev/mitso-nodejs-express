import repo from './price.memory.repository.ts';
import { IPrice } from '../../types/types.ts';

const getAll = async () => {
  return repo.getAll();
};

const getById = async (id: string) => {
  const price = await repo.getById(id);
  if (!price) {
    throw new Error('Price not found');
  }
  return price;
};

const create = async (priceData: IPrice) => {
  return repo.createPrice(priceData);
};

const update = async (id: string, priceData: IPrice) => {
  const price = await repo.updatePrice(id, priceData);
  if (!price) {
    throw new Error('Price not found');
  }
  return price;
};

const remove = async (id: string) => {
  const price = await repo.deletePrice(id);
  if (!price) {
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