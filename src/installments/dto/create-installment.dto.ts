import { IsNotEmpty, IsNumber, IsString, Min, Max } from 'class-validator';

export class CreateInstallmentDto {
  @IsString()
  @IsNotEmpty()
  telegram_id: string;

  @IsNumber()
  @IsNotEmpty()
  total_cost: number;

  @IsNumber()
  @IsNotEmpty()
  amount_per_month: number;

  @IsNumber()
  @Min(0)
  @Max(11)
  start_month: number;

  @IsNumber()
  @Min(1900)
  start_year: number;

  @IsNumber()
  @Min(0)
  @Max(11)
  final_month: number;

  @IsNumber()
  @Min(1900)
  final_year: number;

  @IsString()
  @IsNotEmpty()
  comment: string;
}