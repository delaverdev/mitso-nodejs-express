import User from './user.model.ts';
import { IUser } from '../../types/types.ts';

const users: IUser[] = [];

const getAll = async (): Promise<IUser[]> => {
  return users;
};

const getById = async (id: string): Promise<IUser | null> => {
  return users.find(user => user.id === id) || null;
};

const create = async (userData: IUser): Promise<IUser> => {
  const user = new User(userData);
  users.push(user);
  return user;
};

const update = async (id: string, userData: IUser): Promise<IUser | null> => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  const user = new User({ ...userData, id });
  users[index] = user;
  return user;
};

const remove = async (id: string): Promise<IUser | null> => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return null;
  const user = users[index];
  users.splice(index, 1);
  return user;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};