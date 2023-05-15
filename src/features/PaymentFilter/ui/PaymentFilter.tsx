import { NumberInput, Stack } from '@mantine/core';
import { FC } from 'react';
import { useAppActions, useAppSelector } from 'shared';

export const PaymentFilter: FC = () => {
  const { paymentFrom, paymentTo } = useAppSelector((state) => state.stateReducer.filters);
  const { setPaymentFrom, setPaymentTo } = useAppActions();

  const handlePaymentFrom = (paymentFromPayload: number | '') => {
    setPaymentFrom(paymentFromPayload);

    if (paymentTo && typeof paymentFromPayload === 'number' && paymentFromPayload > paymentTo) {
      setPaymentTo(paymentFromPayload);
    }
  };

  const handlePaymentTo = (paymentToPayload: number | '') => {
    setPaymentTo(paymentToPayload);

    if (paymentFrom && typeof paymentToPayload === 'number' && paymentToPayload < paymentFrom) {
      setPaymentFrom(paymentToPayload);
    }
  };

  return (
    <Stack>
      <NumberInput
        value={paymentFrom}
        onChange={handlePaymentFrom}
        type="number"
        min={0}
        step={500}
        label="Оклад"
        placeholder="От"
      />
      <NumberInput
        value={paymentTo}
        onChange={handlePaymentTo}
        type="number"
        min={Number(paymentFrom)}
        step={500}
        placeholder="До"
      />
    </Stack>
  );
};
