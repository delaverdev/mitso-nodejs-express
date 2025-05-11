import { v4 as uuidv4 } from 'uuid';
import { IUser, IUserResponse } from '../../types/types.ts';

class User implements IUser {
  id: string;
  name: string;
  login: string;
  password: string;

  constructor({ id = uuidv4(), name, login, password }: Partial<IUser> = {}) {
    this.id = id;
    this.name = name ?? '';
    this.login = login ?? '';
    this.password = password ?? '';
  }

  static toResponse(user: IUser): IUserResponse {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;