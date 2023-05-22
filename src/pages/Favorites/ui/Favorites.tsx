import { FC, useState } from 'react';
import { Container } from '@mantine/core';
import { RESPONSE_STATUS, STATUS_MESSAGE, useAppSelector, useGetFavoritesQuery, ResponseError, Loader } from 'shared';
import { VacanciesOverview } from 'widgets';
import { EmptyList } from 'entities';

export const Favorites: FC = () => {
  const [page, setPage] = useState(1);
  const { favorites } = useAppSelector((state) => state.favoritesReducer);

  const {
    data: favoritesResult,
    isError,
    isFetching
  } = useGetFavoritesQuery({ ids: favorites, page }, { skip: !favorites.length });

  if (isError) {
    return <ResponseError codeStatus={RESPONSE_STATUS.serverError} message={STATUS_MESSAGE.serverError} />;
  }

  if (!favorites.length) {
    return (
      <Container size="lg" h="100%" pos="relative">
        <EmptyList />
      </Container>
    );
  }

  return (
    <Container size="lg" h="100%" pos="relative">
      {isFetching ? (
        <Loader />
      ) : (
        <VacanciesOverview vacancies={favoritesResult} isFetching={isFetching} page={page} setPage={setPage} />
      )}
    </Container>
  );
};
