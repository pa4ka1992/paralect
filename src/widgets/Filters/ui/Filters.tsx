import { FC } from 'react';
import { Stack, Group, Text, Button, Paper } from '@mantine/core';
import { ResetFilter } from 'entities';
import { CategoryFilter, PaymentFilter } from 'features';

export const Filters: FC = () => {
  return (
    <Paper>
      <Stack>
        <Group>
          <Text>Фильтры</Text>
          <ResetFilter />
        </Group>

        <CategoryFilter />

        <PaymentFilter />

        <Button>Применить</Button>
      </Stack>
    </Paper>
  );
};
