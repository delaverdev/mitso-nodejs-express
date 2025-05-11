import { Request, Response, NextFunction } from 'express';
import { IRequest } from '../interfaces/index.ts';
import { AuthenticationError } from '../errors/index.ts';
import { JWT_SECRET } from '../common/config.ts';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  role?: string;
}

interface AuthenticatedUser {
  id: string;
  role?: string;
}

export const authenticate = (req: IRequest, res: Response, next: NextFunction): void => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new AuthenticationError('No token provided');
    }
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    req.user = { id: decoded.id, role: decoded.role } as AuthenticatedUser;
    next();
  } catch (err) {
    next(new AuthenticationError('Invalid token'));
  }
};

export const authorize = (roles: string[]) => {
  return (req: IRequest, res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        throw new AuthenticationError('User not authenticated');
      }
      if (!roles.includes(req.user.role || '')) {
        throw new AuthenticationError('User not authorized');
      }
      next();
    } catch (err) {
      next(err);
    }
  };
}; 