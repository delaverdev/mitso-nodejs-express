import { IUser } from '../types/types.ts';
import { IUserRepository } from './index.ts';
import  User  from '../resources/users/user.model.ts';
import { generateId } from '../utils/index.ts';

export class UserRepository implements IUserRepository {
  private users: IUser[] = [];

  async getAll(): Promise<IUser[]> {
    return this.users;
  }

  async getById(id: string): Promise<IUser | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async create(user: IUser): Promise<IUser> {
    const newUser = new User({
      ...user,
      id: generateId()
    });
    this.users.push(newUser);
    return newUser;
  }

  async update(id: string, user: IUser): Promise<IUser | null> {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) {
      return null;
    }
    this.users[index] = user;
    return user;
  }

  async remove(id: string): Promise<IUser | null> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      return null;
    }
    const [removedUser] = this.users.splice(index, 1);
    return removedUser;
  }
} 