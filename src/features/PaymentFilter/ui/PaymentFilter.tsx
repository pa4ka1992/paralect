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
        value={paymentFrom}
        onChange={(payload) => changePayment(payload, 'to')}
        type="number"
        min={0}
        step={500}
        label="Оклад"
        placeholder="От"
        styles={(theme) => ({
          input: {
            fontSize: theme.fontSizes.xs
          },
          label: {
            marginBottom: '8px',
            fontWeight: 700
          }
        })}
      />
      <NumberInput
        value={paymentTo}
        onChange={(payload) => changePayment(payload, 'from')}
        type="number"
        min={Number(paymentFrom)}
        step={500}
        placeholder="До"
        styles={(theme) => ({
          input: {
            fontSize: theme.fontSizes.xs
          }
        })}
      />
    </Stack>
  );
};
