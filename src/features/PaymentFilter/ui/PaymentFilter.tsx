import { NumberInput, Stack } from '@mantine/core';
import { FC } from 'react';
import { useAppActions, useAppSelector, useMatchBreakPoints } from 'shared';

export const PaymentFilter: FC<{ isFetching: boolean }> = ({ isFetching }) => {
  const { isMatches } = useMatchBreakPoints('sm');

  const { payment_from, payment_to } = useAppSelector((state) => state.filtersReducer.filtersState);
  const { setPaymentTo, setPaymentFrom } = useAppActions();

  const changePayment = (payload: number | '', type: string) => {
    type === 'to' ? setPaymentTo(payload) : setPaymentFrom(payload);
  };

  return (
    <Stack spacing="8px">
      <NumberInput
        data-elem="salary-from-input"
        disabled={!!isFetching}
        value={payment_from}
        onChange={(payload) => changePayment(payload, 'from')}
        type="number"
        step={1}
        min={0}
        label="Оклад"
        placeholder="От"
        size={isMatches ? 'sm' : 'xs'}
        styles={(theme) => ({
          label: {
            marginBottom: '8px',
            fontWeight: theme.other.fontWeight.bold
          }
        })}
      />
      <NumberInput
        data-elem="salary-to-input"
        disabled={!!isFetching}
        value={payment_to}
        onChange={(payload) => changePayment(payload, 'to')}
        type="number"
        step={1}
        min={0}
        placeholder="До"
        size={isMatches ? 'sm' : 'xs'}
      />
    </Stack>
  );
};
