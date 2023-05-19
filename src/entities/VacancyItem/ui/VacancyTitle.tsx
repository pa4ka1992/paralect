import React, { FC } from 'react';
import { Group, ActionIcon, Title } from '@mantine/core';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { useAppActions, useAppSelector } from 'shared';

type Props = {
  id: number;
  profession: string;
};

export const VacancyTitle: FC<Props> = ({ id, profession }) => {
  const { favorites } = useAppSelector((state) => state.favoritesReducer);
  const { updateFavorites } = useAppActions();

  const changeFavorites = (event: React.MouseEvent<HTMLElement>, id: number) => {
    event.stopPropagation();
    updateFavorites(id);
  };

  const isInFavorites = (vacancyId: number) => {
    return favorites.includes(vacancyId);
  };
  return (
    <Group position="apart">
      <Title c="blues.1" order={3}>
        {profession}
      </Title>

      <ActionIcon
        data-elem={`vacancy-${id}-shortlist-button`}
        c={isInFavorites(id) ? 'blues.1' : 'whites.5'}
        onClick={(event) => changeFavorites(event, id)}
      >
        {isInFavorites(id) ? <IconStarFilled size="22px" /> : <IconStar size="22px" stroke="1.5" />}
      </ActionIcon>
    </Group>
  );
};
