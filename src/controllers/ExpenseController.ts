import { Request, Response } from 'express';
import Expense from '../models/Expense';

const getAllExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.find();

    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  getAllExpenses
};
