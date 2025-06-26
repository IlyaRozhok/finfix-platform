import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateInstallmentDto {
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @IsNumber()
  totalCost?: number;

  @IsOptional()
  @IsNumber()
  monthlyPayment?: number;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  finalDate?: string;
}