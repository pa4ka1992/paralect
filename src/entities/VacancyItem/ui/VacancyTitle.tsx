import React, { FC } from 'react';
import { Group, ActionIcon, Title } from '@mantine/core';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { useAppActions, useAppSelector, useMatchBreakPoints } from 'shared';

type Props = {
  id: number;
  profession: string;
};

export const VacancyTitle: FC<Props> = ({ id, profession }) => {
  const { favorites } = useAppSelector((state) => state.favoritesReducer);
  const { updateFavorites } = useAppActions();
  const { isMatches } = useMatchBreakPoints('xs');

  const changeFavorites = (event: React.MouseEvent<HTMLElement>, id: number) => {
    event.stopPropagation();
    updateFavorites(id);
  };

  const isInFavorites = (vacancyId: number) => {
    return favorites.includes(vacancyId);
  };
  return (
    <Group position="apart" noWrap>
      <Title c="blues.1" order={isMatches ? 3 : 4}>
        {profession}
      </Title>

      <ActionIcon
        data-elem={`vacancy-${id}-shortlist-button`}
        c={isInFavorites(id) ? 'blues.1' : 'whites.5'}
        onClick={(event) => changeFavorites(event, id)}
      >
        {isInFavorites(id) ? (
          <IconStarFilled size={isMatches ? '22px' : '20px'} />
        ) : (
          <IconStar size={isMatches ? '22px' : '20px'} stroke="1.5" />
        )}
      </ActionIcon>
    </Group>
  );
};
