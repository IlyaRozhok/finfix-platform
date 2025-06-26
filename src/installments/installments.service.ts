import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Installment } from './models/installment.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateInstallmentDto } from './dto/create-installment.dto';
import { calcNewInstallment } from './handlers/calcNewInstallment';
import { UpdateInstallmentDto } from './dto/update-installment.dto';

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
    return this.installmentModel.create(installment);
  }

  async update(id: string, dto: UpdateInstallmentDto): Promise<Installment> {
    const installment = await this.installmentModel.findByPk(id);
    if (!installment) {
      throw new NotFoundException('Installment not found');
    }
    Object.assign(installment, dto);
    return installment.save();
  }

  async delete(id: string): Promise<void> {
    await this.installmentModel.destroy({ where: { id } });
  }
}
