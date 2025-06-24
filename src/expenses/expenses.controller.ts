import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense } from './models/expense.model';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  async findAll(
    @Query('telegram_id') telegram_id: string,
  ): Promise<Expense[] | { message: string }> {
    return this.expensesService.findAll(telegram_id);
  }

  @Post('create')
  create(@Body() createExpense: CreateExpenseDto) {
    return this.expensesService.create(createExpense);
  }

  @Put('update/:expenseId')
  update(
    @Param('expenseId') id: string,
    @Body() updateExpense: UpdateExpenseDto,
  ) {
    return this.expensesService.update(id, updateExpense);
  }


  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.expensesService.delete(id);
  }
}
