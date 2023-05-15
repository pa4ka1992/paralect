import { FC, useRef, useState } from 'react';
import { Button, Center, Stack, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { Pagination, VacancyList } from 'features';
import { ROUTES, useAppSelector, usePaginationSlicer, useSearchVacanciesQuery } from 'shared';
import { FavoriteEmpty } from './assets';

export const Favorites: FC = () => {
  const [page, setPage] = useState(1);
  const perPage = useRef(4);
  const navigate = useNavigate();

  const { favorites } = useAppSelector((state) => state.stateReducer);

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
  const { vacanciesOnPage } = usePaginationSlicer(perPage.current, page, filteredFavorites);

  if (!vacanciesOnPage || !vacanciesOnPage.length) {
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
    <Stack>
      <VacancyList vacancies={vacanciesOnPage} />
      <Pagination controls={{ page, setPage, perPage: perPage.current, length: filteredFavorites?.length }} />
    </Stack>
  );
};
