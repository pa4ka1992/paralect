import { FC } from 'react';
import { Stack, Group, Button, Paper, Title } from '@mantine/core';
import { ResetFilter } from 'entities';
import { CategoryFilter, PaymentFilter } from 'features';
import { useAppActions } from 'shared';

export const Filters: FC = () => {
  const { setSkipQuery } = useAppActions();

  const applyFilters = () => {
    setSkipQuery(false);
  };

  return (
    <Paper w="315px" sx={{ flex: '0 0 auto' }}>
      <Stack spacing="md">
        <Group mb="12px" noWrap align="center" position="apart">
          <Title size="h3">Фильтры</Title>
          <ResetFilter />
        </Group>

        <CategoryFilter />

        <PaymentFilter />

        <Button onClick={applyFilters}>Применить</Button>
      </Stack>
    </Paper>
  );
};
