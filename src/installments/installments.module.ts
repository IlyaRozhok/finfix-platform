import { Module } from '@nestjs/common';
import { InstallmentsController } from './installments.controller';
import { InstallmentsService } from './installments.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Installment } from './models/installment.model';

@Module({
  imports: [SequelizeModule.forFeature([Installment])],
  controllers: [InstallmentsController],
  providers: [InstallmentsService]
})
export class InstallmentsModule {}
