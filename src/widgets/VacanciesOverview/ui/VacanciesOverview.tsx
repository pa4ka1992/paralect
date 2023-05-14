import { Box } from '@mantine/core';
import { FC, useMemo, useState } from 'react';
import { Pagination, VacancyList } from 'features';
import { useSearchVacanciesQuery } from 'shared';

type Props = {
  perPage: number;
};

export const VacanciesOverview: FC<Props> = ({ perPage }) => {
  const [page, setPage] = useState(1);

  const { data: vacancies } = useSearchVacanciesQuery({
    keyword: '',
    payment_from: '',
    payment_to: '',
    catalogues: ''
  });

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
