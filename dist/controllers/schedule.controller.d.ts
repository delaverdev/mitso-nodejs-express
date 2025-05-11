import { IRequest, IResponse, INextFunction } from '../interfaces/index.js';
import { IScheduleService } from '../services/index.js';
import { BaseController } from './index.js';
export declare class ScheduleController extends BaseController {
    constructor(service: IScheduleService);
    getPrices(req: IRequest, res: IResponse, next: INextFunction): Promise<void>;
}
