import { BaseController } from './index.js';
import { NotFoundError } from '../errors/index.js';
export class ScheduleController extends BaseController {
    constructor(service) {
        super(service);
    }
    async getPrices(req, res, next) {
        try {
            const schedule = await this.service.getById(req.params.id);
            if (!schedule) {
                throw new NotFoundError('Schedule not found');
            }
            const prices = await this.service.getPrices(req.params.id);
            res.json(prices);
        }
        catch (err) {
            next(err);
        }
    }
}
//# sourceMappingURL=schedule.controller.js.map