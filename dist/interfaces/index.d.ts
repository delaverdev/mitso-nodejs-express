import { Request, Response, NextFunction } from 'express';
interface AuthenticatedUser {
    id: string;
    role?: string;
}
export interface IRequest extends Request {
    user?: AuthenticatedUser;
}
export interface IResponse extends Response {
}
export interface INextFunction extends NextFunction {
}
export interface IController {
    getAll(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
    getById(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
    create(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
    update(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
    remove(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
}
export interface IUserController extends IController {
    login(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
    logout(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
}
export interface ITourController extends IController {
    getSchedules(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
}
export interface IScheduleController extends IController {
    getPrices(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
}
export interface IPriceController extends IController {
}
export {};
