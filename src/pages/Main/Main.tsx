import { FC } from 'react';
import { Group, Stack } from '@mantine/core';
import { Searchbar } from 'features';
import { Filters, VacancyBox } from 'widgets';

export const Main: FC = () => {
  return (
    <Group>
      <Filters />
      <Stack>
        <Searchbar />
        <VacancyBox />
      </Stack>
    </Group>
  );
};
