// app.ts
import express, { Request, Response, NextFunction } from 'express';
import { PORT } from './common/config.ts';
import { requestLogger } from './middlewares/request-logger.middleware.ts';
import { errorHandler } from './middlewares/error.middleware.ts';
import { setupErrorHandlers } from './common/error-handlers.ts';
import userRouter from './resources/users/user.router.ts';
import tourRouter from './resources/tours/tour.router.ts';
import scheduleRouter from './resources/schedules/schedule.router.ts';
import priceRouter from './resources/prices/price.router.ts';

// Setup error handlers
setupErrorHandlers();

const app = express();

app.use(express.json());
app.use(requestLogger);

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