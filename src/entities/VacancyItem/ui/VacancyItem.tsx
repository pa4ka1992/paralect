import { Group, NavLink, Paper, Text, ActionIcon } from '@mantine/core';
import { IconStar, IconStarFilled, IconMapPin } from '@tabler/icons-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { uid } from 'uid';
import { VacancyProps, useAppActions, useAppSelector } from 'shared';

export const VacancyItem: FC<VacancyProps> = ({ vacancy }) => {
  const navigate = useNavigate();

  const { favorites } = useAppSelector((state) => state.stateReducer);
  const { updateFavorites } = useAppActions();

  const changeFavorites = (id: number) => {
    updateFavorites(id);
  };

  const setFavoriteIcon = (vacancyId: number) => {
    const isInFavorites = favorites.includes(vacancyId);

    return isInFavorites ? <IconStarFilled size="1.125rem" /> : <IconStar size="1.125rem" />;
  };

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
      <ActionIcon color="blue" onClick={() => changeFavorites(vacancy.id)}>
        {setFavoriteIcon(vacancy.id)}
      </ActionIcon>
    </Paper>
  );
};
