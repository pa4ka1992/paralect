import { FC } from 'react';
import { Paper, useMantineTheme, Stack, Group, Title } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { VacancyProps } from 'shared';
import { VacancyTitle } from './VacancyTitle';
import { VacancyShortInfo } from './VacancyShortInfo';

export const VacancyItem: FC<VacancyProps> = ({ vacancy }) => {
  const { id, profession, town } = vacancy;
  const theme = useMantineTheme();

  return (
    <Paper p="lg">
      <Stack spacing="xs">
        <VacancyTitle id={id} profession={profession} />

        <VacancyShortInfo vacancy={vacancy} />

        <Group spacing="6px">
          <IconMapPin color={theme.colors.whites[5]} size="20px" stroke="1.5" />
          <Title order={4}>{town.title}</Title>
        </Group>
      </Stack>
    </Paper>
  );
};
