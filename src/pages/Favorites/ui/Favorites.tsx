import { FC } from 'react';
import { Button, Center, Container, Stack, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { ROUTES, useAppSelector, useSearchVacanciesQuery } from 'shared';
import { VacanciesOverview } from 'widgets';
import { FavoriteEmpty } from './assets';

export const Favorites: FC = () => {
  const navigate = useNavigate();
  const { favorites } = useAppSelector((state) => state.favoritesReducer);

  // vacancies/?ids=ID[] query should reply with array of single vacancies,
  // but seems it doesn't work. So I'am using cash from main page, but I don't like that

  const { filteredFavorites } = useSearchVacanciesQuery(
    { keyword: '', catalogues: '', payment_to: '', payment_from: '' },
    {
      skip: !favorites.length,
      selectFromResult: ({ data }) => {
        return { filteredFavorites: data?.filter((vacancy) => favorites.includes(vacancy.id)) };
      }
    }
  );

  if (!filteredFavorites || !filteredFavorites.length) {
    return (
      <Center>
        <Stack align="center">
          <FavoriteEmpty />
          <Text>Упс, здесь еще ничего нет!</Text>
          <Button onClick={() => navigate(ROUTES.main)}>Поиск Вакансий</Button>
        </Stack>
      </Center>
    );
  }

  return (
    <Container size="lg">
      <VacanciesOverview vacancies={filteredFavorites} />
    </Container>
  );
};
