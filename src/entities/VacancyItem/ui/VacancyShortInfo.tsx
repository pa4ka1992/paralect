import { FC } from 'react';
import { Box, Group, Text, useMantineTheme } from '@mantine/core';
import { IconMapPin, IconPointFilled } from '@tabler/icons-react';
import { IVacancy, useMatchBreakPoints } from 'shared';

type Props = {
  vacancy: IVacancy;
};

export const VacancyShortInfo: FC<Props> = ({ vacancy }) => {
  const { payment_from, payment_to, currency, type_of_work, town } = vacancy;

  const theme = useMantineTheme();
  const { isMatches } = useMatchBreakPoints('xs');

  return (
    <>
      <Group fz={isMatches ? 'sm' : 'xs'} spacing="xs">
        {payment_from || payment_to ? (
          <>
            <Text fw={theme.other.fontWeight.semibold}>
              з/п {payment_to ? `${payment_from} - ${payment_to} ${currency}` : `от ${payment_from} ${currency}`}
            </Text>

            <Box c={theme.colors.whites[5]}>
              <IconPointFilled size={isMatches ? '12px' : '10px'} stroke="1.5" />
            </Box>
          </>
        ) : null}

        <Text>{type_of_work.title}</Text>
      </Group>

      <Group fz={isMatches ? 'sm' : 'xs'} spacing="6px">
        <IconMapPin color={theme.colors.whites[5]} size={isMatches ? '20px' : '18px'} stroke="1.5" />
        <Text>{town.title}</Text>
      </Group>
    </>
  );
};
