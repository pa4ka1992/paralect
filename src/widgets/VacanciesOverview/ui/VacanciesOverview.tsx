import { Stack } from '@mantine/core';
import { FC, useEffect, useState } from 'react';
import { Pagination, VacancyList } from 'features';
import { useAppActions, useAppSelector, usePaginationSlicer, useSearchVacanciesQuery } from 'shared';

type Props = {
  perPage: number;
};

export const VacanciesOverview: FC<Props> = ({ perPage }) => {
  const [page, setPage] = useState(1);

  const { search, category, paymentTo, paymentFrom, skipQuery } = useAppSelector((state) => {
    const { filters, search, skipQuery } = state.filtersReducer;
    const { category, paymentTo, paymentFrom } = filters;

    return { search, skipQuery, category, paymentTo, paymentFrom };
  });
  const { setSkipQuery } = useAppActions();

  useEffect(() => {
    setSkipQuery(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data: vacancies } = useSearchVacanciesQuery(
    {
      keyword: search,
      payment_from: paymentFrom ? String(paymentFrom) : '',
      payment_to: paymentTo ? String(paymentTo) : '',
      catalogues: category
    },
    { skip: skipQuery }
  );

  const { vacanciesOnPage } = usePaginationSlicer(perPage, page, vacancies);

  return (
    <>
      {vacanciesOnPage && (
        <Stack spacing="40px">
          <VacancyList vacancies={vacanciesOnPage} />
          <Pagination controls={{ page, setPage, perPage, length: vacancies?.length }} />
        </Stack>
      )}
    </>
  );
};
