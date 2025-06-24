import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Expense, ExpenseCreationAttributes } from './models/expense.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {
  constructor(@InjectModel(Expense) private expenseModel: typeof Expense) {}

  async findAll(telegram_id: string): Promise<Expense[]> {
    if (!telegram_id) {
      throw new BadRequestException('telegram_id is required');
    }
    return this.expenseModel.findAll({ where: { telegram_id } });
  }

  async create(payload: CreateExpenseDto): Promise<Expense> {
    const expenseData: ExpenseCreationAttributes = {
      telegram_id: payload.telegram_id,
      category: payload.category,
      amount: payload.amount,
      date: payload.date || new Date(),
    };
    return this.expenseModel.create(expenseData);
  }

  async delete(id: string): Promise<void> {
    const result = await this.expenseModel.destroy({ where: { id } });
    if (result === 0) {
      throw new NotFoundException(`Expense not found with id: ${id}`);
    }
  }

  async update(
    expenseId: string,
    updateExpense: UpdateExpenseDto,
  ): Promise<Expense> {
    const expense = await this.expenseModel.findByPk(expenseId);
    if (!expense) {
      throw new NotFoundException(`Expense not found with id: ${expenseId}`);
    }

    const newExpense: Partial<Expense> = {};
    if (updateExpense.amount) {
      newExpense.amount = updateExpense.amount;
    }

    return expense.update(newExpense);
  }
}
