import { Stack } from '@mantine/core';
import { FC, useState } from 'react';
import { Pagination, VacancyList } from 'features';
import { IVacancy, usePaginationSlicer } from 'shared';
import { PER_PAGE } from '../constants';

type Props = {
  vacancies?: IVacancy[];
};

export const VacanciesOverview: FC<Props> = ({ vacancies }) => {
  const [page, setPage] = useState(1);

  const { vacanciesOnPage } = usePaginationSlicer(PER_PAGE, page, vacancies);

  return (
    <>
      {vacanciesOnPage && (
        <Stack spacing="40px" sx={{ flex: '1 1 100%' }} h="100%">
          <VacancyList vacancies={vacanciesOnPage} />
          <Pagination controls={{ page, setPage, perPage: PER_PAGE, length: vacancies?.length }} />
        </Stack>
      )}
    </>
  );
};
