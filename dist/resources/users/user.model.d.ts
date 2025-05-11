import { IUser, IUserResponse } from '../../types/index.js';
export default class User implements IUser {
    id: string;
    name: string;
    login: string;
    password: string;
    constructor({ id, name, login, password }?: Partial<IUser>);
    static toResponse(user: IUser): IUserResponse;
}
