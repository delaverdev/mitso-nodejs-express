import { IUser } from '../types/types.ts';
import { ITour } from '../types/types.ts';
import { ISchedule } from '../types/types.ts';
import { IPrice } from '../types/types.ts';

export interface IUserRepository {
  getAll(): Promise<IUser[]>;
  getById(id: string): Promise<IUser | null>;
  create(user: IUser): Promise<IUser>;
  update(id: string, user: IUser): Promise<IUser | null>;
  remove(id: string): Promise<IUser | null>;
}

export interface ITourRepository {
  getAll(): Promise<ITour[]>;
  getById(id: string): Promise<ITour | null>;
  create(tour: ITour): Promise<ITour>;
  update(id: string, tour: ITour): Promise<ITour | null>;
  remove(id: string): Promise<ITour | null>;
}

export interface IScheduleRepository {
  getAll(): Promise<ISchedule[]>;
  getById(id: string): Promise<ISchedule | null>;
  create(schedule: ISchedule): Promise<ISchedule>;
  update(id: string, schedule: ISchedule): Promise<ISchedule | null>;
  remove(id: string): Promise<ISchedule | null>;
}

export interface IPriceRepository {
  getAll(): Promise<IPrice[]>;
  getById(id: string): Promise<IPrice | null>;
  create(price: IPrice): Promise<IPrice>;
  update(id: string, price: IPrice): Promise<IPrice | null>;
  remove(id: string): Promise<IPrice | null>;
  removeByScheduleId(scheduleId: string): Promise<void>;
} 