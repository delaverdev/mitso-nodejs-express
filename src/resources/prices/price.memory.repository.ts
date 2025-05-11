import Price from './price.model.ts';
import { IPrice } from '../../types/types.ts';

const prices: IPrice[] = [];

const getAll = async (): Promise<IPrice[]> => {
  return prices;
};

const getById = async (id: string): Promise<IPrice | null> => {
  return prices.find(price => price.id === id) || null;
};

const createPrice = async (priceData: IPrice): Promise<IPrice> => {
  const price = new Price(priceData);
  prices.push(price);
  return price;
};

const updatePrice = async (id: string, priceData: IPrice): Promise<IPrice | null> => {
  const index = prices.findIndex(price => price.id === id);
  if (index === -1) return null;
  const price = new Price({ ...priceData, id });
  prices[index] = price;
  return price;
};

const deletePrice = async (id: string): Promise<IPrice | null> => {
  const index = prices.findIndex(price => price.id === id);
  if (index === -1) return null;
  const price = prices[index];
  prices.splice(index, 1);
  return price;
};

const removeByScheduleId = async (scheduleId: string): Promise<void> => {
  const index = prices.findIndex(price => price.scheduleId === scheduleId);
  if (index !== -1) {
    prices.splice(index, 1);
  }
};

export default {
  getAll,
  getById,
  createPrice,
  updatePrice,
  deletePrice,
  removeByScheduleId
};