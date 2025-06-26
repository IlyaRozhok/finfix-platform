import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { InstallmentsService } from './installments.service';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { UpdateInstallmentDto } from './dto/update-installment.dto';

@Controller('installments')
export class InstallmentsController {
  constructor(private readonly installmentsService: InstallmentsService) {}

  @Get()
  async findAll(@Query('telegram_id') telegram_id: string) {
    return this.installmentsService.findAll(telegram_id);
  }

  @Post()
  create(@Body() createInstallment: CreateInstallmentDto) {
    return this.installmentsService.create(createInstallment);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstallment: UpdateInstallmentDto,
  ) {
    return this.installmentsService.update(id, updateInstallment);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.installmentsService.delete(id);
  }
}
