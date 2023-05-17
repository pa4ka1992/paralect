import { NumberInput, Stack } from '@mantine/core';
import { FC } from 'react';
import { useAppActions, useAppSelector } from 'shared';

export const PaymentFilter: FC = () => {
  const { paymentFrom, paymentTo } = useAppSelector((state) => state.filtersReducer.filters);
  const { setPaymentFrom, setPaymentTo, setSkipQuery } = useAppActions();

  const changePayment = (payload: number | '', type: string) => {
    setSkipQuery(true);
    type === 'to' ? setPaymentTo(payload) : setPaymentFrom(payload);
  };

  return (
    <Stack spacing="8px">
      <NumberInput
        data-elem="salary-from-input"
        value={paymentFrom}
        onChange={(payload) => changePayment(payload, 'from')}
        type="number"
        min={0}
        step={500}
        label="Оклад"
        placeholder="От"
        styles={(theme) => ({
          label: {
            marginBottom: '8px',
            fontWeight: theme.other.fontWeight.bold
          }
        })}
      />
      <NumberInput
        data-elem="salary-to-input"
        value={paymentTo}
        onChange={(payload) => changePayment(payload, 'to')}
        type="number"
        min={0}
        step={500}
        placeholder="До"
      />
    </Stack>
  );
};
