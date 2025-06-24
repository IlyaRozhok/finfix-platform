import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { ExpenseCategory } from '../enums/category.enum';

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  telegram_id: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(ExpenseCategory)
  category: ExpenseCategory;

  @IsNumber()
  amount: number;

  @IsOptional()
  date?: Date;
}
