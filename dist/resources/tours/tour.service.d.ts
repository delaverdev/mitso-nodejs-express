import { ITour } from '../../types/index.js';
export declare function getAll(): Promise<ITour[]>;
export declare function getById(id: string): Promise<ITour | null>;
export declare function create(data: Partial<ITour>): Promise<ITour>;
export declare function update(id: string, data: Partial<ITour>): Promise<ITour | null>;
export declare function remove(id: string): Promise<void>;
