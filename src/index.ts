import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import expensesRouter from './routes/expenseRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/expenses', expensesRouter);

mongoose
  .connect('mongodb://localhost:27017/expense-tracker-db')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
