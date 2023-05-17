import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Title } from '@mantine/core';
import { ROUTES } from 'shared';

export const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <Stack align="center" justify="center" h="100%" spacing="xl">
      <Title order={2}> Ошибка 404</Title>
      <Title order={3}>Страница не найдена</Title>
      <Button variant="favorites" onClick={() => navigate(ROUTES.main)}>
        Поиск вакансий
      </Button>
    </Stack>
  );
};
