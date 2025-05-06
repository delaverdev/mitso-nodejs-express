// app.js
import express from 'express';
import userRouter from './resources/users/user.router.js';
import tourRouter from './resources/tours/tour.router.js';
import scheduleRouter from './resources/schedules/schedule.router.js';
import priceRouter from './resources/prices/price.router.js';

const app = express();
app.use(express.json());

app.use('/api/users',   userRouter);
app.use('/api/tours',   tourRouter);
app.use('/api/schedules', scheduleRouter); 
app.use('/api/prices',  priceRouter);

export default app;