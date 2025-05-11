import { IUser } from '../types/types.ts';
import { ITour } from '../types/types.ts';
import { ISchedule } from '../types/types.ts';
import { IPrice } from '../types/types.ts';

export interface IUserService {
  getAll(): Promise<IUser[]>;
  getById(id: string): Promise<IUser | null>;
  create(user: Partial<IUser>): Promise<IUser>;
  update(id: string, user: Partial<IUser>): Promise<IUser | null>;
  remove(id: string): Promise<void>;
}

export interface ITourService {
  getAll(): Promise<ITour[]>;
  getById(id: string): Promise<ITour | null>;
  create(tour: Partial<ITour>): Promise<ITour>;
  update(id: string, tour: Partial<ITour>): Promise<ITour | null>;
  remove(id: string): Promise<void>;
}

export interface IScheduleService {
  getAll(tourId?: string): Promise<ISchedule[]>;
  getById(id: string): Promise<ISchedule | null>;
  create(schedule: Partial<ISchedule>): Promise<ISchedule>;
  update(id: string, schedule: Partial<ISchedule>): Promise<ISchedule | null>;
  remove(id: string): Promise<void>;
  getPrices(id: string): Promise<IPrice[]>;
}

export interface IPriceService {
  getAll(scheduleId?: string): Promise<IPrice[]>;
  getById(id: string): Promise<IPrice | null>;
  create(price: Partial<IPrice>): Promise<IPrice>;
  update(id: string, price: Partial<IPrice>): Promise<IPrice | null>;
  remove(id: string): Promise<void>;
} 