import { IUser } from '../types/index.js';
import { ITour } from '../types/index.js';
import { ISchedule } from '../types/index.js';
import { IPrice } from '../types/index.js';
export declare class User implements IUser {
    id: string;
    name: string;
    login: string;
    password: string;
    constructor({ id, name, login, password }: IUser);
}
export declare class Tour implements ITour {
    id: string;
    name: string;
    description: string;
    constructor({ id, name, description }: ITour);
}
export declare class Schedule implements ISchedule {
    id: string;
    tourId: string;
    date: string;
    time: string;
    constructor({ id, tourId, date, time }: ISchedule);
}
export declare class Price implements IPrice {
    id: string;
    scheduleId: string;
    price: number;
    currency: string;
    constructor({ id, scheduleId, price, currency }: IPrice);
}
