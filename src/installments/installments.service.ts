import { BadRequestException, Injectable } from '@nestjs/common';
import { Installment } from './models/installment.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { calcNewInstallment } from './handlers/calcNewInstallment';

@Injectable()
export class InstallmentsService {
  constructor(
    @InjectModel(Installment) private installmentModel: typeof Installment,
  ) {}

  async findAll(telegram_id: string): Promise<Installment[]> {
    if (!telegram_id) {
      throw new BadRequestException('telegram_id is required');
    }
    return this.installmentModel.findAll({
      where: { telegramId: telegram_id },
    });
  }

  async create(dto: CreateInstallmentDto): Promise<Installment> {
    const installment = calcNewInstallment(dto);
    console.log(installment);
    return this.installmentModel.create(installment);
  }
}
