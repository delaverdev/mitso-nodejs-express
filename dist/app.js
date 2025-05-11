import express from 'express';
import { PORT } from './common/config.js';
import { errorHandler } from './common/validator.js';
import userRouter from './resources/users/user.router.js';
import tourRouter from './resources/tours/tour.router.js';
import scheduleRouter from './resources/schedules/schedule.router.js';
import priceRouter from './resources/prices/price.router.js';
const app = express();
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/tours', tourRouter);
app.use('/api/schedules', scheduleRouter);
app.use('/api/prices', priceRouter);
app.use(errorHandler);
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;
//# sourceMappingURL=app.js.map