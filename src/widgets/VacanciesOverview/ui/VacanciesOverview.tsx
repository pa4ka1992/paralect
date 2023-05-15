import { Box } from '@mantine/core';
import { FC, useState } from 'react';
import { Pagination, VacancyList } from 'features';
import { useAppSelector, usePaginationSlicer, useSearchVacanciesQuery } from 'shared';

type Props = {
  perPage: number;
};

export const VacanciesOverview: FC<Props> = ({ perPage }) => {
  const [page, setPage] = useState(1);

  const { search, category, paymentTo, paymentFrom, skipQuery } = useAppSelector((state) => {
    const { filters, search, skipQuery } = state.stateReducer;
    const { category, paymentTo, paymentFrom } = filters;

    return { search, skipQuery, category, paymentTo, paymentFrom };
  });

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
        <Box>
          <VacancyList vacancies={vacanciesOnPage} />
          <Pagination controls={{ page, setPage, perPage, length: vacancies?.length }} />
        </Box>
      )}
    </>
  );
};
