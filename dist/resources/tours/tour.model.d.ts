import { ITour, ITourResponse } from '../../types/index.js';
export default class Tour implements ITour {
    id: string;
    name: string;
    description: string;
    constructor({ id, name, description }?: Partial<ITour>);
    static toResponse(tour: ITour): ITourResponse;
}
