import { IPrice, IPriceResponse } from '../../types/index.js';
export default class Price implements IPrice {
    id: string;
    scheduleId: string;
    price: number;
    currency: string;
    constructor({ id, scheduleId, price, currency }?: Partial<IPrice>);
    static toResponse(p: IPrice): IPriceResponse;
}
