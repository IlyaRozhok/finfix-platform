import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(private readonly sequelize: Sequelize) {}
  healthCheck() {
    return { healthCheck: 'OK' };
  }
}
