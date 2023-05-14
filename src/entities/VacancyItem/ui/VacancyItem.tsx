import { Group, NavLink, Paper, Text, ActionIcon } from '@mantine/core';
import { IconStar, IconMapPin } from '@tabler/icons-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { uid } from 'uid';
import { VacancyProps } from 'shared';

export const VacancyItem: FC<VacancyProps> = ({ vacancy }) => {
  const navigate = useNavigate();

  return (
    <Paper key={uid()}>
      <NavLink label={vacancy.profession} onClick={() => navigate(`/vacancy/${vacancy.id}`)}></NavLink>
      <Group>
        <Text>
          {vacancy.payment_from}-{vacancy.payment_to}
          {vacancy.currency}
        </Text>
        <Text>{vacancy.type_of_work.title}</Text>
      </Group>
      <Text>
        <IconMapPin size="1.125rem" /> {vacancy.town.title}
      </Text>
      <ActionIcon>
        <IconStar size="1.125rem" />
      </ActionIcon>
    </Paper>
  );
};
