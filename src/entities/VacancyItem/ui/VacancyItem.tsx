import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, useMantineTheme, Stack } from '@mantine/core';
import { IVacancy, useMatchBreakPoints } from 'shared';
import { VacancyTitle } from './VacancyTitle';
import { VacancyShortInfo } from './VacancyShortInfo';

type Props = {
  vacancy: IVacancy;
};

export const VacancyItem: FC<Props> = ({ vacancy }) => {
  const { id, profession } = vacancy;

  const theme = useMantineTheme();
  const { isMatches } = useMatchBreakPoints('xs');

  const navigate = useNavigate();
  const { id: routeId } = useParams<{ id: string }>();

  return (
    <Paper
      p={isMatches ? 'lg' : 'xs'}
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
      </Stack>
    </Paper>
  );
};
