import { NumberInput, Stack } from '@mantine/core';
import { FC } from 'react';

export const PaymentFilter: FC = () => {
  return (
    <Stack>
      <NumberInput label="Оклад" />
      <NumberInput />
    </Stack>
  );
};
