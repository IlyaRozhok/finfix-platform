import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { InstallmentsService } from './installments.service';
import { CreateInstallmentDto } from './dto/create-installment.dto';

@Controller('installments')
export class InstallmentsController {
  constructor(private readonly installmentsService: InstallmentsService) {}

  @Get()
  async findAll(@Query('telegram_id') telegram_id: string) {
    return this.installmentsService.findAll(telegram_id);
  }

  @Post('create')
  create(@Body() createInstallment: CreateInstallmentDto) {
    return this.installmentsService.create(createInstallment);
  }
}
