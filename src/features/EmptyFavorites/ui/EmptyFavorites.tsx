import { FC } from 'react';
import { Button, Flex, Stack, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared';

import { FavoriteEmpty } from './assets';

export const EmptyFavorites: FC = () => {
  const navigate = useNavigate();

  return (
    <Flex align="flex-start" justify="center" h="100%">
      <Stack align="center" mt="100px" spacing="32px">
        <FavoriteEmpty width="240px" height="230px" />
        <Title order={3}>Упс, здесь еще ничего нет!</Title>
        <Button variant="favorites" onClick={() => navigate(ROUTES.main)}>
          Поиск Вакансий
        </Button>
      </Stack>
    </Flex>
  );
};
