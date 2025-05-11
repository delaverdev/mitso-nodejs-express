import { v4 as uuidv4 } from 'uuid';
import { ITour, ITourResponse } from '../../types/types.ts';

export default class Tour implements ITour {
  id: string;
  name: string;
  description: string;

  constructor({ id = uuidv4(), name, description }: Partial<ITour> = {}) {
    this.id = id;
    this.name = name ?? '';
    this.description = description ?? '';
  }

  static toResponse(tour: ITour): ITourResponse {
    const { id, name, description } = tour;
    return { id, name, description };
  }
}