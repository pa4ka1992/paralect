import { FC } from 'react';
import { Stack, Group, Text, Button, Paper } from '@mantine/core';
import { ResetFilter } from 'entities';
import { CategoryFilter, PaymentFilter } from 'features';
import { useAppActions } from 'shared';

export const Filters: FC = () => {
  const { setSkipQuery } = useAppActions();

  const applyFilters = () => {
    setSkipQuery(false);
  };

  return (
    <Paper>
      <Stack>
        <Group>
          <Text>Фильтры</Text>
          <ResetFilter />
        </Group>

        <CategoryFilter />

        <PaymentFilter />

        <Button onClick={applyFilters}>Применить</Button>
      </Stack>
    </Paper>
  );
};
