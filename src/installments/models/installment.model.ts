import { DataTypes } from 'sequelize';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'installments',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Installment extends Model<Installment> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    field: 'telegram_id',
  })
  telegramId: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    field: 'amount_per_month',
  })
  amountPerMonth: number;

  @Column({ type: DataType.INTEGER, allowNull: false, field: 'total_cost' })
  totalCost: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    field: 'service_fee',
  })
  serviceFee: number;

  @Column({ type: DataType.INTEGER, allowNull: false, field: 'months_count' })
  monthsCount: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'months_remaining',
  })
  monthsRemaining: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'total_remaining',
  })
  totalRemaining: number;

  @Column({ type: DataType.STRING, allowNull: false, field: 'comment' })
  comment: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'start_date' })
  startDate: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: 'final_payment_date',
  })
  finalPaymentDate: string;
}
