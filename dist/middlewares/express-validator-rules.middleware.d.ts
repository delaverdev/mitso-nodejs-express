import { Request, Response, NextFunction } from 'express';
export declare const validateUser: ((req: Request, res: Response, next: NextFunction) => void)[];
export declare const validateTour: ((req: Request, res: Response, next: NextFunction) => void)[];
export declare const validateSchedule: ((req: Request, res: Response, next: NextFunction) => void)[];
export declare const validatePrice: ((req: Request, res: Response, next: NextFunction) => void)[];
export declare const validateId: ((req: Request, res: Response, next: NextFunction) => void)[];
export declare const validateQuery: ((req: Request, res: Response, next: NextFunction) => void)[];
export declare const validateUuidParam: (paramName: string) => (req: Request, res: Response, next: NextFunction) => void;
export declare const validateBody: (requiredFields: string[]) => (req: Request, res: Response, next: NextFunction) => void;
