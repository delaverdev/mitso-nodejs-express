import { Response, NextFunction } from 'express';
import { IRequest } from '../interfaces/index.js';
export declare const authenticate: (req: IRequest, res: Response, next: NextFunction) => void;
export declare const authorize: (roles: string[]) => (req: IRequest, res: Response, next: NextFunction) => void;
