import { Request, Response, NextFunction } from 'express';
import { validateUuidParam, validateBody } from '../common/validator.ts';

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  validateBody(['name', 'login', 'password'])(req, res, next);
};

export const validateTour = (req: Request, res: Response, next: NextFunction) => {
  validateBody(['name', 'description'])(req, res, next);
};

export const validateSchedule = (req: Request, res: Response, next: NextFunction) => {
  validateBody(['tourId', 'date', 'time'])(req, res, next);
};

export const validatePrice = (req: Request, res: Response, next: NextFunction) => {
  validateBody(['scheduleId', 'price', 'currency'])(req, res, next);
};

export const validateId = (paramName: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    validateUuidParam(paramName)(req, res, next);
  };
}; 