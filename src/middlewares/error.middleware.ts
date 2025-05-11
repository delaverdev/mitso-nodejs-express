import { Request, Response, NextFunction } from 'express';
import logger from '../common/logger';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error('Unhandled error', {
    error: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    body: req.body,
    query: req.query
  });

  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
}; 