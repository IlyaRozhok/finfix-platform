import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsEnum,
  IsUUID,
} from 'class-validator';
import { ExpenseCategory } from '../enums/category.enum';

export class UpdateExpenseDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
