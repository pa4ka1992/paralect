import { NumberInput, Stack } from '@mantine/core';
import { FC } from 'react';
import { useAppActions, useAppSelector } from 'shared';

type InputHadler = (paymentFromPayload: number | '') => void;

export const PaymentFilter: FC = () => {
  const { paymentFrom, paymentTo } = useAppSelector((state) => state.stateReducer.filters);
  const { setPaymentFrom, setPaymentTo, setSkipQuery } = useAppActions();

  const changePaymentFrom: InputHadler = (paymentFromPayload) => {
    setSkipQuery(true);
    setPaymentFrom(paymentFromPayload);

    const isUpdateTo = paymentTo && typeof paymentFromPayload === 'number' && paymentFromPayload > paymentTo;

    if (isUpdateTo) {
      setPaymentTo(paymentFromPayload);
    }
  };

  const changePaymentTo: InputHadler = (paymentToPayload) => {
    setSkipQuery(true);
    setPaymentTo(paymentToPayload);

    const isUpdateFrom = paymentFrom && typeof paymentToPayload === 'number' && paymentToPayload < paymentFrom;

    if (isUpdateFrom) {
      setPaymentFrom(paymentToPayload);
    }
  };

  return (
    <Stack>
      <NumberInput
        value={paymentFrom}
        onChange={changePaymentFrom}
        type="number"
        min={0}
        step={500}
        label="Оклад"
        placeholder="От"
      />
      <NumberInput
        value={paymentTo}
        onChange={changePaymentTo}
        type="number"
        min={Number(paymentFrom)}
        step={500}
        placeholder="До"
      />
    </Stack>
  );
};
