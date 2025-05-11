import { ITour } from '../../types/index.js';
declare const _default: {
    getAll: () => Promise<ITour[]>;
    getById: (id: string) => Promise<ITour | null>;
    createTour: (tour: ITour) => Promise<ITour>;
    updateTour: (id: string, tour: ITour) => Promise<ITour | null>;
    deleteTour: (id: string) => Promise<ITour | null>;
};
export default _default;
