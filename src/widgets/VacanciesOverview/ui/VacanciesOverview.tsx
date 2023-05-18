import { Stack } from '@mantine/core';
import { Dispatch, FC, SetStateAction } from 'react';
import { EmptyList, Pagination, VacancyList } from 'features';
import { ISearch } from 'shared';

type Props = {
  vacancies?: ISearch;
  isFetching: boolean;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const VacanciesOverview: FC<Props> = ({ vacancies, isFetching, page, setPage }) => {
  const isShowEmpty = !isFetching && !vacancies?.total;

  return (
    <>
      {isShowEmpty ? (
        <EmptyList />
      ) : (
        <Stack spacing="40px" sx={{ flex: '1 1 100%' }} h="100%">
          <VacancyList vacancies={vacancies?.objects} />
          <Pagination page={page} setPage={setPage} searchTotal={vacancies?.total} />
        </Stack>
      )}
    </>
  );
};
