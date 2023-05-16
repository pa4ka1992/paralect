import { FC } from 'react';
import { Flex, Stack } from '@mantine/core';
import { Searchbar } from 'features';
import { Filters, VacanciesOverview } from 'widgets';

export const Main: FC = () => {
  return (
    <Flex align="flex-start" wrap="nowrap" gap="xl">
      <Filters />
      <Stack sx={{ flex: '1 1 auto' }}>
        <Searchbar />
        <VacanciesOverview perPage={4} />
      </Stack>
    </Flex>
  );
};
