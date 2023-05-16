import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { uid } from 'uid';
import { Group, NavLink, Paper, Text, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconStar, IconStarFilled, IconMapPin } from '@tabler/icons-react';
import { VacancyProps, useAppActions, useAppSelector } from 'shared';

export const VacancyItem: FC<VacancyProps> = ({ vacancy }) => {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const { favorites } = useAppSelector((state) => state.favoritesReducer);
  const { updateFavorites } = useAppActions();

  const changeFavorites = (id: number) => {
    updateFavorites(id);
  };

  const isInFavorites = (vacancyId: number) => {
    return favorites.includes(vacancyId);
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
        <IconMapPin color={theme.colors.whites[5]} size="20px" /> {vacancy.town.title}
      </Text>
      <ActionIcon c={isInFavorites(vacancy.id) ? 'blues.1' : 'whites.5'} onClick={() => changeFavorites(vacancy.id)}>
        {isInFavorites(vacancy.id) ? <IconStarFilled size="22px" /> : <IconStar size="22px" />}
      </ActionIcon>
    </Paper>
  );
};
