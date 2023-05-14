import { FC } from 'react';
import { Group, Stack } from '@mantine/core';
import { Searchbar } from 'features';
import { Filters, VacanciesOverview } from 'widgets';

export const Main: FC = () => {
  return (
    <Group>
      <Filters />
      <Stack>
        <Searchbar />
        <VacanciesOverview perPage={4} />
      </Stack>
    </Group>
  );
};
