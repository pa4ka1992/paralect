import { FC } from 'react';
import { Box, Group, Text, useMantineTheme } from '@mantine/core';
import { IconPointFilled } from '@tabler/icons-react';
import { IVacancy } from 'shared';

type Props = {
  vacancy: IVacancy;
};

export const VacancyShortInfo: FC<Props> = ({ vacancy }) => {
  const { payment_from, payment_to, currency, type_of_work } = vacancy;
  const theme = useMantineTheme();

  return (
    <Group fz="sm" spacing="xs">
      {payment_from || payment_to ? (
        <>
          <Text fw={theme.other.fontWeight.semibold}>
            з/п {payment_to ? `${payment_from} - ${payment_to} ${currency}` : `от ${payment_from} ${currency}`}
          </Text>

          <Box c={theme.colors.whites[5]}>
            <IconPointFilled size="12px" stroke="1.5" />
          </Box>
        </>
      ) : null}

      <Text>{type_of_work.title}</Text>
    </Group>
  );
};
