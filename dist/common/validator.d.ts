import { Request, Response, NextFunction } from 'express';
export declare const validateUuidParam: (paramName: string) => (req: Request, res: Response, next: NextFunction) => void;
export declare const validateBody: (requiredFields: string[]) => (req: Request, res: Response, next: NextFunction) => void;
export declare const validateQuery: (requiredFields?: string[]) => (req: Request, res: Response, next: NextFunction) => void;
export declare function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void;
