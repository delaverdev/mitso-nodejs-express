import repo from './user.memory.repository.ts';
import User from './user.model.ts';
import { IUser, IUserResponse } from '../../types/types.ts';

const getAll = async (): Promise<IUserResponse[]> => {
  const users = await repo.getAll();
  return users.map(user => User.toResponse(user));
};

const getById = async (id: string): Promise<IUserResponse> => {
  const user = await repo.getById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return User.toResponse(user);
};

const create = async (userData: IUser): Promise<IUserResponse> => {
  const user = await repo.create(userData);
  return User.toResponse(user);
};

const update = async (id: string, userData: IUser): Promise<IUserResponse> => {
  const user = await repo.update(id, userData);
  if (!user) {
    throw new Error('User not found');
  }
  return User.toResponse(user);
};

const remove = async (id: string): Promise<void> => {
  const user = await repo.remove(id);
  if (!user) {
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