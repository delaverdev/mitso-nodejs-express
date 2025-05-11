import { IUser } from '../../types/index.js';
declare const _default: {
    getAll: () => Promise<IUser[]>;
    getById: (id: string) => Promise<IUser | null>;
    createUser: (user: IUser) => Promise<IUser>;
    updateUser: (id: string, user: IUser) => Promise<IUser | null>;
    deleteUser: (id: string) => Promise<IUser | null>;
};
export default _default;
