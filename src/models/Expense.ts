import mongoose, { Document, Schema } from 'mongoose';

export interface ExpenseModel extends Document {
  description: string;
  amount: number;
  date: Date;
}

const ExpenseSchema: Schema = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model<ExpenseModel>('Expense', ExpenseSchema);
