import { CreateInstallmentDto } from '../dto/create-installment.dto';

export const calcNewInstallment = (dto: CreateInstallmentDto) => {
  const monthsCount =
    (dto.final_year - dto.start_year) * 12 +
    (dto.final_month - dto.start_month) +
    1;

  const today = new Date();
  const monthsPaid = Math.max(
    0,
    (today.getFullYear() - dto.start_year) * 12 +
      (today.getMonth() - dto.start_month),
  );

  const monthsRemaining = Math.max(0, monthsCount - monthsPaid);
  const totalRemaining = Number(
    (monthsRemaining * dto.amount_per_month).toFixed(2),
  );
  const serviceFee = Number(
    ((dto.total_cost / 100) * 1.9 * monthsCount).toFixed(2),
  );

  const startDate = new Date(dto.start_year, dto.start_month, 1);
  const finalDate = new Date(dto.final_year, dto.final_month + 1, 0);

  return {
    telegramId: dto.telegram_id,
    amountPerMonth: dto.amount_per_month,
    totalCost: dto.total_cost,
    serviceFee: serviceFee,
    monthsCount: monthsCount,
    monthsRemaining: monthsRemaining,
    totalRemaining: totalRemaining,
    comment: dto.comment,
    startDate: startDate.toISOString().split('T')[0],
    finalPaymentDate: finalDate.toISOString().split('T')[0],
  };
};
