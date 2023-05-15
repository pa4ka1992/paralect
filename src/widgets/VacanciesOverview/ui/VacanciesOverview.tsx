import { Box } from '@mantine/core';
import { FC, useMemo, useState } from 'react';
import { Pagination, VacancyList } from 'features';
import { useAppSelector, useSearchVacanciesQuery } from 'shared';

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

  const vacanciesOnPage = useMemo(() => {
    const endOffset = page - 1 + perPage;
    return vacancies?.slice(page - 1, endOffset);
  }, [perPage, vacancies, page]);

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
