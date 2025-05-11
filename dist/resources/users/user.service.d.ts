import { IUser, IUserResponse } from '../../types/index.js';
export declare function getAll(): Promise<IUserResponse[]>;
export declare function getById(id: string): Promise<IUserResponse | null>;
export declare function create(data: Partial<IUser>): Promise<IUserResponse>;
export declare function update(id: string, data: Partial<IUser>): Promise<IUserResponse | null>;
export declare function remove(id: string): Promise<void>;
