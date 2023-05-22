export const getPaymentRange = (payment_from: number, payment_to: number, currency: string) => {
  const fromFormatted = payment_from.toLocaleString('fr');
  const toFormatted = payment_to.toLocaleString('fr');

  if (payment_from && payment_to) {
    return `з/п ${fromFormatted} - ${toFormatted} ${currency}`;
  }

  if (payment_from) {
    return `з/п от ${fromFormatted} ${currency}`;
  }

  if (payment_to) {
    return `з/п до ${toFormatted} ${currency}`;
  }

  return 'з/п не указана';
};
