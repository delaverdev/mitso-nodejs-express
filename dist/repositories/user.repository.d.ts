import { IUser } from '../types/index.js';
import { IUserRepository } from './index.js';
export declare class UserRepository implements IUserRepository {
    private users;
    getAll(): Promise<IUser[]>;
    getById(id: string): Promise<IUser | null>;
    create(user: IUser): Promise<IUser>;
    update(id: string, user: IUser): Promise<IUser | null>;
    remove(id: string): Promise<IUser | null>;
}
