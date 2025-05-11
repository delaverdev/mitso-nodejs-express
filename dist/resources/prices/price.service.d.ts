import { IPrice } from '../../types/index.js';
export declare function getAll(): Promise<IPrice[]>;
export declare function getById(id: string): Promise<IPrice | null>;
export declare function create(data: Partial<IPrice>): Promise<IPrice>;
export declare function update(id: string, data: Partial<IPrice>): Promise<IPrice | null>;
export declare function remove(id: string): Promise<void>;
