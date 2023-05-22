import { FC } from 'react';
import { Button, Flex, Space, Stack, Title } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES, useMatchBreakPoints } from 'shared';

import { EmptyImage } from './assets';

export const EmptyList: FC = () => {
  const { isMatches } = useMatchBreakPoints('sm');

  const navigate = useNavigate();
  const location = useLocation();

  const isRouteFavorite = location.pathname === ROUTES.favorites;

  return (
    <>
      <Space h="100px" />
      <Flex align="flex-start" justify="center" h="100%">
        <Stack align="center" spacing="32px">
          <EmptyImage width={isMatches ? '240px' : '200px'} height={isMatches ? '230px' : '190px'} />
          <Title ta="center" order={isMatches ? 3 : 4}>
            {isRouteFavorite ? 'Упс, здесь еще ничего нет!' : 'По вашему запросу ничего не найдено'}
          </Title>
          {isRouteFavorite && (
            <Button size={isMatches ? 'md' : 'xs'} variant="favorites" onClick={() => navigate(ROUTES.main)}>
              Поиск Вакансий
            </Button>
          )}
        </Stack>
      </Flex>
    </>
  );
};
