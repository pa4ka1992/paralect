import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, useMantineTheme, Stack, Group, Title } from '@mantine/core';
import { IconMapPin } from '@tabler/icons-react';
import { IVacancy } from 'shared';
import { VacancyTitle } from './VacancyTitle';
import { VacancyShortInfo } from './VacancyShortInfo';

type Props = {
  vacancy: IVacancy;
};

export const VacancyItem: FC<Props> = ({ vacancy }) => {
  const { id, profession, town } = vacancy;
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const { id: routeId } = useParams<{ id: string }>();

  return (
    <Paper
      p="lg"
      data-elem={`vacancy-${id}`}
      onClick={() => !routeId && navigate(`/vacancy/${id}`)}
      sx={{
        cursor: 'pointer',
        transition: 'all 0.1s',
        '&:hover': {
          backgroundColor: theme.colors.whites[2]
        }
      }}
    >
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
