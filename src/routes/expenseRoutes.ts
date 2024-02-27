import express from 'express';
import ExpenseController from '../controllers/ExpenseController';

const expensesRouter = express.Router();

// Define routes for managing expenses
expensesRouter.get('/', ExpenseController.getAllExpenses);

export default expensesRouter;
