import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { ExpenseCategory } from '../enums/category.enum';

export interface ExpenseCreationAttributes {
  telegram_id: string;
  category: ExpenseCategory;
  amount: number;
  date?: Date;
}

@Table({ tableName: 'expenses', timestamps: true })
export class Expense extends Model<Expense, ExpenseCreationAttributes> {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  })
  id: string;

  @Column({ type: DataTypes.STRING, unique: true })
  telegram_id: string;

  @Column({
    type: DataTypes.ENUM(...Object.values(ExpenseCategory)),
    allowNull: false,
  })
  category: ExpenseCategory;

  @Column({ type: DataTypes.DECIMAL(10, 2), allowNull: false })
  amount: number;

  @Column({ type: DataTypes.DATE, allowNull: false })
  date: Date;

  @Column({ type: DataTypes.DATE, allowNull: false, field: 'created_at' })
  createdAt: Date;

  @Column({ type: DataTypes.DATE, allowNull: false, field: 'updated_at' })
  updatedAt: Date;
}
