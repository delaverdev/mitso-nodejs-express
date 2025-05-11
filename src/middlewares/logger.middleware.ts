import { Request, Response, NextFunction } from 'express';
import { LOG_LEVEL } from '../common/config.ts';

export const logger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const message = `${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`;
    console.log(`[${LOG_LEVEL}] ${message}`);
  });
  next();
}; 