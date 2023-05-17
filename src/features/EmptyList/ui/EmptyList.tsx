import { FC } from 'react';
import { Button, Flex, Stack, Title } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared';

import { EmptyImage } from './assets';

export const EmptyList: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isRouteFavorite = location.pathname === ROUTES.favorites;

  return (
    <Flex align="flex-start" justify="center" h="100%">
      <Stack align="center" mt="100px" spacing="32px">
        <EmptyImage width="240px" height="230px" />
        <Title order={3}>
          {isRouteFavorite ? 'Упс, здесь еще ничего нет!' : 'По вашему запросу ничего не найдено'}
        </Title>
        {isRouteFavorite && (
          <Button variant="favorites" onClick={() => navigate(ROUTES.main)}>
            Поиск Вакансий
          </Button>
        )}
      </Stack>
    </Flex>
  );
};
