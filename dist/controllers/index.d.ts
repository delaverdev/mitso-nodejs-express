import { IRequest, IResponse, INextFunction } from '../interfaces/index.js';
import { IUserService } from '../services/index.js';
import { ITourService } from '../services/index.js';
import { IScheduleService } from '../services/index.js';
import { IPriceService } from '../services/index.js';
export declare class BaseController {
    protected service: IUserService | ITourService | IScheduleService | IPriceService;
    constructor(service: IUserService | ITourService | IScheduleService | IPriceService);
    getAll(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
    getById(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
    create(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
    update(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
    remove(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
}
