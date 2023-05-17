import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Group, ActionIcon, Title } from '@mantine/core';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { useAppActions, useAppSelector } from 'shared';

type Props = {
  id: number;
  profession: string;
};

export const VacancyTitle: FC<Props> = ({ id, profession }) => {
  const navigate = useNavigate();

  const { favorites } = useAppSelector((state) => state.favoritesReducer);
  const { updateFavorites } = useAppActions();

  const changeFavorites = (id: number) => {
    updateFavorites(id);
  };

  const isInFavorites = (vacancyId: number) => {
    return favorites.includes(vacancyId);
  };
  return (
    <Group position="apart">
      <Title
        c="blues.1"
        order={3}
        onClick={() => navigate(`/vacancy/${id}`)}
        sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
      >
        {profession}
      </Title>

      <ActionIcon
        data-elem={`vacancy-${id}-shortlist-button`}
        c={isInFavorites(id) ? 'blues.1' : 'whites.5'}
        onClick={() => changeFavorites(id)}
      >
        {isInFavorites(id) ? <IconStarFilled size="22px" /> : <IconStar size="22px" stroke="1.5" />}
      </ActionIcon>
    </Group>
  );
};
