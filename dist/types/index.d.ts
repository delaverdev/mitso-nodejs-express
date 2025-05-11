export interface IUser {
    id: string;
    name: string;
    login: string;
    password: string;
}
export interface ITour {
    id: string;
    name: string;
    description: string;
}
export interface ISchedule {
    id: string;
    tourId: string;
    date: string;
    time: string;
}
export interface IPrice {
    id: string;
    scheduleId: string;
    price: number;
    currency: string;
}
export interface IUserResponse {
    id: string;
    name: string;
    login: string;
}
export interface ITourResponse {
    id: string;
    name: string;
    description: string;
}
export interface IScheduleResponse {
    id: string;
    tourId: string;
    date: string;
    duration: number;
}
export interface IPriceResponse {
    id: string;
    scheduleId: string;
    price: number;
    currency: string;
}
export {};
