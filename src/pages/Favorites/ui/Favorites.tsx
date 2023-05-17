import { FC } from 'react';
import { Container } from '@mantine/core';
import { useAppSelector, useSearchVacanciesQuery } from 'shared';
import { VacanciesOverview } from 'widgets';
import { EmptyFavorites } from 'features';

export const Favorites: FC = () => {
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
    return <EmptyFavorites />;
  }

  return (
    <Container size="lg" h="100%">
      <VacanciesOverview vacancies={filteredFavorites} />
    </Container>
  );
};
