import { UserRepository } from './user.repository';
import { IUser, IUserResponse } from '../../types/types';

const userRepository = new UserRepository();

const getAll = async (): Promise<IUserResponse[]> => {
  return userRepository.getAll();
};

const getById = async (id: string): Promise<IUserResponse> => {
  const user = await userRepository.getById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const create = async (userData: Omit<IUser, 'id'>): Promise<IUserResponse> => {
  return userRepository.create(userData);
};

const update = async (id: string, userData: Partial<IUser>): Promise<IUserResponse> => {
  const user = await userRepository.update(id, userData);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const remove = async (id: string): Promise<void> => {
  const success = await userRepository.delete(id);
  if (!success) {
    throw new Error('User not found');
  }
};

export default {
  getAll,
  getById,
  create,
  update,
  remove
};