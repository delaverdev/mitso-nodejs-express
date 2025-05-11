// app.ts
import express, { Request, Response, NextFunction } from 'express';
import { PORT } from './common/config.ts';
import { errorHandler } from './common/validator.ts';
import userRouter from './resources/users/user.router.ts';
import tourRouter from './resources/tours/tour.router.ts';
import scheduleRouter from './resources/schedules/schedule.router.ts';
import priceRouter from './resources/prices/price.router.ts';

const app = express();

app.use(express.json());

// Routes
app.use('/api/users', userRouter);
app.use('/api/tours', tourRouter);
app.use('/api/schedules', scheduleRouter);
app.use('/api/prices', priceRouter);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

export default app;