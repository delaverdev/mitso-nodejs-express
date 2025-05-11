import { IPrice } from '../../types/index.js';
declare const _default: {
    getAll: () => Promise<IPrice[]>;
    getById: (id: string) => Promise<IPrice | null>;
    createPrice: (price: IPrice) => Promise<IPrice>;
    updatePrice: (id: string, price: IPrice) => Promise<IPrice | null>;
    deletePrice: (id: string) => Promise<IPrice | null>;
    removeByScheduleId: (scheduleId: string) => Promise<void>;
};
export default _default;
