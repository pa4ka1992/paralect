import { FC } from 'react';
import { Stack, Group, Button, Paper, Title } from '@mantine/core';
import { ResetFilter } from 'entities';
import { CategoryFilter, PaymentFilter } from 'features';
import { useAppActions, useAppSelector } from 'shared';

export const Filters: FC<{ isFetching: boolean }> = ({ isFetching }) => {
  const { payment_from, payment_to, catalogues } = useAppSelector((state) => state.filtersReducer.filters);
  const { setRequestParams } = useAppActions();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFetching) {
      return;
    }

    setRequestParams({ payment_from, payment_to, catalogues });
  };

  return (
    <Paper w="315px" sx={{ flex: '0 0 auto' }}>
      <Stack spacing="md" m="1px">
        <Group mb="12px" noWrap align="center" position="apart">
          <Title order={3}>Фильтры</Title>
          <ResetFilter />
        </Group>

        <form onSubmit={handleSubmit}>
          <Stack spacing="md">
            <CategoryFilter />

            <PaymentFilter isFetching={isFetching} />

            <Button disabled={!!isFetching} data-elem="search-button" type="submit">
              Применить
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
};
