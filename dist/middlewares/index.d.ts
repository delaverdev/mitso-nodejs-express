import { Request, Response, NextFunction } from 'express';
export declare const validateUser: (req: Request, res: Response, next: NextFunction) => void;
export declare const validateTour: (req: Request, res: Response, next: NextFunction) => void;
export declare const validateSchedule: (req: Request, res: Response, next: NextFunction) => void;
export declare const validatePrice: (req: Request, res: Response, next: NextFunction) => void;
export declare const validateId: (paramName: string) => (req: Request, res: Response, next: NextFunction) => void;
