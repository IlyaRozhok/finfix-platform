import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Expense } from './models/expense.model';

@Module({
  imports: [SequelizeModule.forFeature([Expense])],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule {}
